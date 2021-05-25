import React, { Component } from 'react';
import { Engine } from './engine';
import Search from '../Search/Search';
import SelectedStations from '../Selection/SelectedStations';
import { StationCard } from '../Search/SearchResults';
// import Fork from './fork';
import * as qs from 'query-string';
import '../css/style.css';

// Bypass CORS
function getCorsFreeUrl(url) {
    return 'https://api.allorigins.win/raw?url=' + url;    
}



class SatDisplay extends Component{
    
    state = {
        selected: [],
        stations: []
    }
    
    
    componentDidMount() {
        this.engine = new Engine();
        this.engine.initialize(this.el, {
            onStationClicked: this.handleStationClicked
        });
        this.addStations();

        setInterval(this.handleTimer, 1000);
    }

    componentWillUnmount() {
        this.engine.dispose();
    }

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

    findStationById = (stations, id) => {
        return stations.find(st => st.satrec && st.satrec.satnum == id);
    }

    handleStationClicked = (station) => {
        if (!station) return;

        this.toggleSelection(station);
    }

    toggleSelection(station) {
        if (this.isSelected(station))
            this.deselectStation(station);
        else
            this.selectStation(station);
    }

    isSelected = (station) => {
        return this.state.selected.includes(station);
    }

    selectStation = (station) => {
        console.log("Station selected: " + station);
        const newSelected = this.state.selected.concat(station);
        this.setState({selected: newSelected});

        this.engine.addOrbit(station);
    }

    deselectStation = (station) => {
        const newSelected = this.state.selected.filter(s => s !== station);
        this.setState( { selected: newSelected } );

        this.engine.removeOrbit(station);
    }

    addStations = () => {
        this.addCelestrakSets();
        //this.engine.addSatellite(ISS);
        //this.addAmsatSets();
    }

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

                stations.forEach((station) =>{
                    this.selectStation(station);
                })
            });

    }

    addAmsatSets = () => {
        this.engine.loadLteFileStations(getCorsFreeUrl('https://www.amsat.org/tle/current/nasabare.txt'), 0xffff00);
    }

    handleTimer = () => {
        this.engine.updateAllPositions(new Date());
    }

    handleSearchResultClick = (station) => {
        if (!station) return;

        this.toggleSelection(station);
    }

    handleRemoveSelected = (station) => {
        if (!station) return;
        
        this.deselectStation(station);
    }

    handleRemoveAllSelected = () => {
        this.state.selected.forEach(s => this.engine.removeOrbit(s));
        this.setState({selected: []});
    }

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

if (module.hot) {
    module.hot.accept();
}

export default SatDisplay;