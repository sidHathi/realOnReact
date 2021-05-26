/**
 * satelliteDisplay.js
 * 
 * Exports React object that displays the Three.js satellite visualization
 * created in engine.js. Contains functions for initiating API calls,
 * initializing the engine, and handling user interactions.
 * 
 * Relies extensively on open-source code from: https://github.com/dsuarezv/satellite-tracker by dsuarezv
 *
 * Siddharth Hathi, REAL, May 2021
 */

import React, { Component } from 'react';
import { Engine } from './engine';
import Search from '../Search/Search';
import SelectedStations from '../Selection/SelectedStations';
import { StationCard } from '../Search/SearchResults';
import * as qs from 'query-string';
import '../css/style.css';

// Bypass CORS for API calls
function getCorsFreeUrl(url) {
    return 'https://api.allorigins.win/raw?url=' + url;    
}

class SatDisplay extends Component{
    
    // Instance variable that stores the satelite info
    state = {
        selected: [],
        stations: []
    }
    
    /**
     * componentDidMount
     * 
     * Event handler for webpage loading. Initializes engine object.
     */
    componentDidMount() {
        this.engine = new Engine();
        this.engine.initialize(this.el, {
            onStationClicked: this.handleStationClicked
        });
        this.addStations();

        setInterval(this.handleTimer, 1000);
    }

    /**
     * componentWillUnmount
     * 
     * Event handler for page close. Kills the engine.
     */
    componentWillUnmount() {
        this.engine.dispose();
    }

    /**
     * processQuery
     * 
     * [UNUSED] Function for search feature built into dsuarez library
     * Can be used in the future to process search queries. Retreives
     * stations in query and marks them as selected.
     * 
     * @param {*} stations Stations being displayed
     */
    processQuery = (stations) => {
        const q = window.location.search;
        if (!q) return;

        const params = qs.parse(q);
        if (!params.ss) return;

        const selectedIds = params.ss.split(',');
        if (!selectedIds || selectedIds.length === 0) return;

        selectedIds.forEach(id => {
            const station = this.findStationById(stations, id);
            if (station) this.selectStation(station);
        });
    }

    /**
     * findStationById
     * 
     * Retreives the station in the stations array that matches the id parameter
     * 
     * @param {*} stations the stations array
     * @param {*} id the id parameter
     * @returns the matching station
     */
    findStationById = (stations, id) => {
        return stations.find(st => st.satrec && st.satrec.satnum == id);
    }

    /**
     * handleStationClicked
     * 
     * Event handler for when user clicks on a station. Toggles Selection
     * 
     * @param {*} station 
     * @returns 
     */
    handleStationClicked = (station) => {
        if (!station) return;

        this.toggleSelection(station);
    }

    /**
     * toggleSelection
     * 
     * Toggles whether a particular station is selected
     * 
     * @param {*} station the station
     */
    toggleSelection(station) {
        if (this.isSelected(station))
            this.deselectStation(station);
        else
            this.selectStation(station);
    }

    /**
     * isSelected
     * 
     * Returns whether the station is selected
     * 
     * @param {*} station the station
     * @returns True if selected, False otherwise
     */
    isSelected = (station) => {
        return this.state.selected.includes(station);
    }

    /**
     * selectStation
     * 
     * Sets a particular station to selected.
     * 
     * @param {*} station the station
     */
    selectStation = (station) => {
        console.log("Station selected: " + station);
        const newSelected = this.state.selected.concat(station);
        this.setState({selected: newSelected});

        this.engine.addOrbit(station);
    }

    /**
     * deselectStation
     * 
     * Removes station from selected array.
     * 
     * @param {*} station the station
     */
    deselectStation = (station) => {
        const newSelected = this.state.selected.filter(s => s !== station);
        this.setState( { selected: newSelected } );

        this.engine.removeOrbit(station);
    }

    /**
     * addStations
     * 
     * Adds stations from API to engine
     */
    addStations = () => {
        this.addCelestrakSets();
        //this.engine.addSatellite(ISS);
        //this.addAmsatSets();
    }

    /**
     * addCelestrakSets
     * 
     * Queries the celestrack API for satellites and adds them to the engine
     */
    addCelestrakSets = () => {
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/weather.txt'), 0x00ffff)
        this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/cubesat.txt'), 0xffffff)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/science.txt'), 0xffff00)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/stations.txt'), 0xffff00)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/cosmos-2251-debris.txt'), 0xff0000)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/iridium-NEXT.txt'), 0x00ff00)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/gps-ops.txt'), 0x00ff00)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/ses.txt'), 0xffffff)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/starlink.txt'), 0xffffff)
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/gps-ops.txt'), 0xffffff, { orbitMinutes: 0, satelliteSize: 200 })
        //this.engine.loadLteFileStations(getCorsFreeUrl('http://www.celestrak.com/NORAD/elements/glo-ops.txt'), 0xff0000, { orbitMinutes: 500, satelliteSize: 500 })
            .then(stations => {
                this.setState({stations});
                this.processQuery(stations);

                // Selects stations being displayed
                stations.forEach((station) =>{
                    this.selectStation(station);
                })
            });

    }

    /**
     * addAmsatSets
     * 
     * Loads amsat satellites into engine
     */
    addAmsatSets = () => {
        this.engine.loadLteFileStations(getCorsFreeUrl('https://www.amsat.org/tle/current/nasabare.txt'), 0xffff00);
    }

    /**
     * handleTimer
     * 
     * Event handler for time change - updates positions of satellites
     */
    handleTimer = () => {
        this.engine.updateAllPositions(new Date());
    }

    /**
     * handleSearchResultClick
     * 
     * [UNUSED] Event handler for when the user selects a search result
     * 
     * @param {*} station station they selected
     */
    handleSearchResultClick = (station) => {
        if (!station) return;

        this.toggleSelection(station);
    }

    /**
     * handleRemoveSelected
     * 
     * Deselects a station
     * 
     * @param {*} station the station
     */
    handleRemoveSelected = (station) => {
        if (!station) return;
        
        this.deselectStation(station);
    }

    /**
     * handleRemoveAllSelected
     * 
     * Removes all stations from selected array
     */
    handleRemoveAllSelected = () => {
        this.state.selected.forEach(s => this.engine.removeOrbit(s));
        this.setState({selected: []});
    }

    /**
     * render
     * 
     * Builds the final React object from the engine.
     * 
     * @returns The React object
     */
    render() {
        const { selected, stations } = this.state;
            return (
                <div>
                    <div className="row">
                        <div className='col-lg-6'>
                            <div ref={c => this.el = c} className='earth' />
                        </div>
                        <div className='col-lg-1'></div>
                        <div className="col-lg-5">
                            {selected.map((station, i) => {
                                return <StationCard 
                                    station={station} 
                                    key={station.name + i} 
                                    onRemoveClick={() => {}}
                                    onClick={() => {}}
                                />
                            })}
                        </div>
                    </div>
                </div>
            )
    }
}

// Asks module to accept hot changes
if (module.hot) {
    module.hot.accept();
}

export default SatDisplay;