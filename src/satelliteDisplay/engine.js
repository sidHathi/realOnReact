import * as THREE from 'three-full';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import earthmap from '../assets/earthmap-high.jpg';
import circle from '../assets/circle.png';
import { parseTleFile as parseTleFile, getPositionFromTle } from "./tle";
import { earthRadius } from "satellite.js/lib/constants";

const SatelliteSize = 50;
const ixpdotp = 1440 / (2.0 * 3.141592654) ;

let TargetDate = new Date();

const defaultOptions = {
    backgroundColor: 0x00000,
    defaultSatelliteColor: 0xff0000,
    onStationClicked: null
}

const defaultStationOptions = {
    orbitMinutes: 0,
    satelliteSize: 50
}


if (module.hot) {
    module.hot.accept();
}


export class Engine {

    stations = [];

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

    dispose() {
        window.removeEventListener('mousedown', this.handleMouseDown);
        window.removeEventListener('resize', this.handleWindowResize);
        //window.cancelAnimationFrame(this.requestID);
        
        this.raycaster = null;
        this.el = null;

        this.controls.dispose();
    }

    handleWindowResize = () => {
        const width = this.el.clientWidth*0.8;
        const height = this.el.clientHeight*1;

        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.render();
    };

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

    removeOrbit = (station) => {
        if (!station || !station.orbit) return;

        this.earth.remove(station.orbit);
        station.orbit.geometry.dispose();
        station.orbit = null;
        station.mesh.material = this.material;
        this.render();
    }

    _addTleFileStations = (lteFileContent, color, stationOptions) => {
        const stations = parseTleFile(lteFileContent, stationOptions);

        const { satelliteSize } = stationOptions;

        stations.forEach(s => {
            this.addSatellite(s, color, satelliteSize);
        });

        this.render();

        return stations;
    }



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


    _getSatellitePositionFromTle = (station, date) => {
        date = date || TargetDate;
        return getPositionFromTle(station, date);
    }

    updateSatellitePosition = (station, date) => {
        date = date || TargetDate;

        const pos = getPositionFromTle(station, date);
        if (!pos) return;

        station.mesh.position.set(pos.x, pos.y, pos.z);
       // this.handleWindowResize();
    }

    
    updateAllPositions = (date) => {
        if (!this.stations) return;

        this.stations.forEach(station => {
            this.updateSatellitePosition(station, date);
        });

        this.render();
    }


    // __ Scene _______________________________________________________________


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

    _setupLights = () => {
        const sun = new THREE.PointLight(0xffffff, 1, 0);
        //sun.position.set(0, 0, -149400000);
        sun.position.set(0, 59333894, -137112541);

        const ambient = new THREE.AmbientLight(0x909090);

        this.scene.add(sun);
        this.scene.add(ambient);
    }

    _addBaseObjects = () => {
        this._addEarth();
    };

    render = () => {
        this.renderer.render(this.scene, this.camera);
        //this.requestID = window.requestAnimationFrame(this._animationLoop); 
    };



    // __ Scene contents ______________________________________________________


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

    _findStationFromMesh = (threeObject) => {
        for (var i = 0; i < this.stations.length; ++i) {
            const s = this.stations[i];

            if (s.mesh === threeObject) return s;
        }

        return null;
    }
}