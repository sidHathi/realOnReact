/**
 * engine.js
 * 
 * Exports driver object class for the Three.js satellite visualization. 
 * The 'engine' contains code for getting satellite data from the TLE API, and for
 * building and populating the Three.js satellite display.
 * 
 * Relies extensively on open-source code from: https://github.com/dsuarezv/satellite-tracker by dsuarezv
 * 
 * Siddharth Hathi, REAL, May 2021
 */

import * as THREE from 'three-full';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earthmap from '../assets/earthmap-high.jpg';
import circle from '../assets/circle.png';
import { parseTleFile as parseTleFile, getPositionFromTle } from "./tle";
import { earthRadius } from "satellite.js/lib/constants";

// Global constants
const SatelliteSize = 50;
const ixpdotp = 1440 / (2.0 * 3.141592654) ;

// Current date
let TargetDate = new Date();

// Three canvas options
const defaultOptions = {
    backgroundColor: 0x00000,
    defaultSatelliteColor: 0xff0000,
    onStationClicked: null
}

// Default API query options
const defaultStationOptions = {
    orbitMinutes: 0,
    satelliteSize: 50
}

// Updates module on hot change
if (module.hot) {
    module.hot.accept();
}

export class Engine {

    stations = [];  // Stores stations being displayed in visualization

    /**
     * initialize
     * 
     * Constructor for the engine object. Initializes instance variables,
     * and event handlers and calls the setup and render functions
     * 
     * @param {*} container React object used to display the visualiztion
     * @param {*} options Custom options for the visualizaiton
     */
    initialize(container, options = {}) {
        this.el = container;
        this.raycaster = new THREE.Raycaster();
        this.options = { ...defaultOptions, ...options };

        this._setupScene();
        this._setupLights();
        this._addBaseObjects();

        this.render();

        window.addEventListener('resize', this.handleWindowResize);
        window.addEventListener('mousedown', this.handleMouseDown);
    }

    /**
     * dispose
     * 
     * Function called when the engine is removed - stops event listeners
     * and satellite rendering
     */
    dispose() {
        window.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('resize', this.handleWindowResize);
        //window.cancelAnimationFrame(this.requestID);
        
        this.raycaster = null;
        this.el = null;

        this.controls.dispose();
    }

    /**
     * handleWindowResize
     * 
     * Event handler for window resizing. Resizes the three visualization
     * When the user resizes the window
     */
    handleWindowResize = () => {
        const width = this.el.clientWidth*0.8;
        const height = this.el.clientHeight*1;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.render();
    };

    /**
     * handleMouseDown
     * 
     * Event handler for user clicks. Checks if the user is clicking on a station
     * 
     * @param {*} e Point where user clicked
     */
    handleMouseDown = (e) => {
        const mouse = new THREE.Vector2(
            (e.clientX / window.innerWidth ) * 2 - 1,
            -(e.clientY / window.innerHeight ) * 2 + 1 );

	    this.raycaster.setFromCamera(mouse, this.camera);

        let station = null;

	    var intersects = this.raycaster.intersectObjects(this.scene.children, true);
        if (intersects && intersects.length > 0) {
            const picked = intersects[0].object;
            if (picked) {
                station = this._findStationFromMesh(picked);
            }
        }

        const cb = this.options.onStationClicked;
        if (cb) cb(station);
    }


    // __ API _________________________________________________________________


    /**
     * addSatellite
     * 
     * Adds a new station to the class's array of satellites. Creates
     * a sprite for the satellite, adds it to the visualization and 
     * adds the station to the stations array.
     * 
     * @param {*} station Station to be added to the visualization
     * @param {*} color Color of satellite
     * @param {*} size Size of satellite
     * @returns 
     */
    addSatellite = (station, color, size) => {
        console.log("Adding satellite")
        
        //const sat = this._getSatelliteMesh(color, size);
        const sat = this._getSatelliteSprite(color, size);
        const pos = this._getSatellitePositionFromTle(station);
        if (!pos) return;
        //const pos = { x: Math.random() * 20000 - 10000, y: Math.random() * 20000 - 10000 , z: Math.random() * 20000 - 10000, }

        sat.position.set(pos.x, pos.y, pos.z);
        station.mesh = sat;

        this.stations.push(station);

        console.log("Minutes " + station.orbitMinutes);;
       // if (station.orbitMinutes > 0) {
            console.log("Adding station"+ sat);
            this.addOrbit(station);
        //}

        this.earth.add(sat);
        this.earth.updateMatrix();
        console.log(this.earth.children);
        //this.handleWindowResize();
       // this.render();

    }

    /**
     * loadLteFileOptions
     * 
     * Executes API query to retreive satellites in real time.
     * User provides API url and options, and the function executes
     * the query and calls functions to add the satellites it finds
     * to the visualization
     * 
     * @param {*} url API url
     * @param {*} color color of satellites
     * @param {*} stationOptions API options
     * @returns 
     */
    loadLteFileStations = (url, color, stationOptions) => {
        const options = { ...defaultStationOptions, ...stationOptions };

        return fetch(url, {
            'Access-Control-Allow-Origin:': '*', // 'cors' by default
            'noradId': 40378
          }).then(res => {
            if (res.ok) {
                return res.text().then(text => {
                    return this._addTleFileStations(text, color, options);
                
                });
            }
        });
    }

    /**
     * addOrbit
     * 
     * Adds a stations orbit to the visualization
     * 
     * @param {*} station Station whose orbit is being added
     */
    addOrbit = (station) => {
     //   if (station.orbitMinutes > 0) return;

        const revsPerDay = station.satrec.no * ixpdotp;
        const intervalMinutes = 1;
        const minutes = station.orbitMinutes || 1440 / revsPerDay;
        const initialDate = new Date();

        //console.log('revsPerDay', revsPerDay, 'minutes', minutes);

        if (!this.orbitMaterial) {
            this.orbitMaterial = new THREE.LineBasicMaterial({color: 0x999999, opacity: 1.0, transparent: true });
        }

        var geometry = new THREE.Geometry();
        
        for (var i = 0; i <= minutes; i += intervalMinutes) {
            const date = new Date(initialDate.getTime() + i * 60000);

            const pos = getPositionFromTle(station, date);
            if (!pos) continue;

            geometry.vertices.push(new THREE.Vector3(pos.x, pos.y, pos.z));
        }        

        console.log("changing color to " + this.orbitMaterial);
        var orbitCurve = new THREE.Line(geometry, this.orbitMaterial);
        station.orbit = orbitCurve;
        station.mesh.material = this.selectedMaterial;

        this.earth.add(orbitCurve);
        this.render();
        //this.handleWindowResize();
    }

    /**
     * removeOrbit
     * 
     * Removes a stations orbit to the visualization
     * 
     * @param {*} station Station whose orbit is being removed
     */
    removeOrbit = (station) => {
        if (!station || !station.orbit) return;

        this.earth.remove(station.orbit);
        station.orbit.geometry.dispose();
        station.orbit = null;
        station.mesh.material = this.material;
        this.render();
    }

    /**
     * _addTleFileStations
     * 
     * Parses a tle file to build a stations array from the TLEs
     * 
     * @param {*} station Station whose orbit is being added
     */
    _addTleFileStations = (lteFileContent, color, stationOptions) => {
        const stations = parseTleFile(lteFileContent, stationOptions);

        const { satelliteSize } = stationOptions;

        stations.forEach(s => {
            this.addSatellite(s, color, satelliteSize);
        });

        this.render();

        return stations;
    }

    /**
     * _getSatelliteMesh
     * 
     * Retreives the Three.js mesh for the satellite
     * 
     * @param {*} color Color of mesh
     * @param {*} size Size of Mesh
     * @returns The mesh
     */
    _getSatelliteMesh = (color, size) => {
        color = color || this.options.defaultSatelliteColor;
        size = size || SatelliteSize;

        if (!this.geometry) {

            this.geometry = new THREE.BoxBufferGeometry(size, size, size);
            this.material = new THREE.MeshPhongMaterial({
                color: color,
                emissive: 0xFF4040,
                flatShading: false,
                side: THREE.DoubleSide,
            });
        }

        return new THREE.Mesh(this.geometry, this.material);
    }

    /**
     * _getSatelliteSprite
     * 
     * Retreives the Three.js sprite for the satellite
     * 
     * @param {*} color Color of the satellite
     * @param {*} size Size of the Satellite
     * @returns The sprite
     */
    _getSatelliteSprite = (color, size) => {
        console.log("getting sprite");
        
        const SpriteScaleFactor = 5000;

        if (!this.material) {
            this._satelliteSprite = new THREE.TextureLoader().load(circle, this.render);
            this.selectedMaterial = new THREE.SpriteMaterial({
                map: this._satelliteSprite, 
                color: 0xFF0000,
                sizeAttenuation: false
            });
            console.log(this.selectedMaterial.color);
            this.material = new THREE.SpriteMaterial({
                map: this._satelliteSprite, 
                color: color, 
                sizeAttenuation: false
            });            
        }

        const result = new THREE.Sprite(this.material);
        result.scale.set(size / SpriteScaleFactor, size / SpriteScaleFactor, 1);
        return result;
    }


    /**
     * _getSatellitePositionFromTle
     * 
     * Parses a TLE to return position of satellite at a certain time
     * 
     * @param {*} station The station being found
     * @param {*} date The time at which the position is desired
     * @returns position of the station at the time
     */
    _getSatellitePositionFromTle = (station, date) => {
        date = date || TargetDate;
        return getPositionFromTle(station, date);
    }

    /**
     * updateSatellitePosition
     * 
     * Updates the position of the satellite in the visualization
     * based on the time
     * 
     * @param {*} station The station
     * @param {*} date The time at which the position is desired
     */
    updateSatellitePosition = (station, date) => {
        date = date || TargetDate;

        const pos = getPositionFromTle(station, date);
        if (!pos) return;

        station.mesh.position.set(pos.x, pos.y, pos.z);
    }

    /**
     * updateAllPositions
     * 
     * Loops through all the stations being displayed and
     * updates their positions.
     * 
     * @param {*} date 
     * @returns 
     */
    updateAllPositions = (date) => {
        if (!this.stations) return;

        this.stations.forEach(station => {
            this.updateSatellitePosition(station, date);
        });

        this.render();
    }


    // __ Scene _______________________________________________________________

    /**
     * _setupScene
     * 
     * Initializes the instance variables of the Three.js scene
     */
    _setupScene = () => {
        const width = this.el.clientWidth*0.8;
        const height = this.el.clientHeight*1;

        this.scene = new THREE.Scene();

        this._setupCamera(width, height);

        this.renderer = new THREE.WebGLRenderer({
            logarithmicDepthBuffer: true,
            antialias: true
        });

        this.renderer.setClearColor(new THREE.Color(this.options.backgroundColor));
        this.renderer.setSize(width, height);

        this.el.appendChild(this.renderer.domElement);
    };

    /**
     * _setupCamera
     * 
     * Initializes the camera position and controls in the
     * Three.js scene
     * 
     * @param {*} width width of canvas
     * @param {*} height height of canvas
     */
    _setupCamera(width, height) {
        var NEAR = 1e-6, FAR = 1e27;
        this.camera = new THREE.PerspectiveCamera(54, width / height, NEAR, FAR);
        this.controls = new OrbitControls(this.camera, this.el);
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.addEventListener('change', () => this.render());
        this.camera.position.z = -15000;
        this.camera.position.x = 15000;
        this.camera.lookAt(0, 0, 0);
    }

    /**
     * _setupsLights
     * 
     * Adds lighting to the Three.js scene
     */
    _setupLights = () => {
        const sun = new THREE.PointLight(0xffffff, 1, 0);
        //sun.position.set(0, 0, -149400000);
        sun.position.set(0, 59333894, -137112541);

        const ambient = new THREE.AmbientLight(0x909090);

        this.scene.add(sun);
        this.scene.add(ambient);
    }

    /**
     * _addBaseObjects
     * 
     * Adds the earth to the scene
     */
    _addBaseObjects = () => {
        this._addEarth();
    };

    /**
     * render
     * 
     * Builds the Three.js scene
     */
    render = () => {
        this.renderer.render(this.scene, this.camera);
    };

    // __ Scene contents ______________________________________________________

    /**
     * _addEarth
     * 
     * Builds the Earth object and adds it to the scene
     */
    _addEarth = () => {
        const textLoader = new THREE.TextureLoader();

        const group = new THREE.Group();

        // Planet
        let geometry = new THREE.SphereGeometry(earthRadius, 50, 50);
        let material = new THREE.MeshPhongMaterial({
            //color: 0x156289,
            //emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: false,
            map: textLoader.load(earthmap, this.render)
        });

        const earth = new THREE.Mesh(geometry, material);
        group.add(earth);

        // // Axis
        // material = new THREE.LineBasicMaterial({color: 0xffffff});
        // geometry = new THREE.Geometry();
        // geometry.vertices.push(
        //     new THREE.Vector3(0, -7000, 0),
        //     new THREE.Vector3(0, 7000, 0)
        // );
        
        // var earthRotationAxis = new THREE.Line(geometry, material);
        // group.add(earthRotationAxis);

        this.earth = group;
        this.scene.add(this.earth);

        //this.scene.rotateX(1);
    }

    /**
     * _findStationFromMesh
     * 
     * Returns the station object corresponding to a Three.js mesh
     * 
     * @param {*} threeObject the mesh
     * @returns the station
     */
    _findStationFromMesh = (threeObject) => {
        for (var i = 0; i < this.stations.length; ++i) {
            const s = this.stations[i];

            if (s.mesh === threeObject) return s;
        }

        return null;
    }
}