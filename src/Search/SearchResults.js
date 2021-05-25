import React from 'react';
import * as satellite from 'satellite.js/lib/index';

const MaxSearchResults = 20;

const filterResults = (stations, searchText) => {
    if (!stations) return null;
    if (!searchText || searchText === '') return null;

    const regex = new RegExp(searchText, 'i');

    return stations.filter(station => regex.test(station.name)).slice(0, MaxSearchResults);
}

    
const SearchResults = ({stations, searchText, onResultClick}) => {
    const results = filterResults(stations, searchText);
    if (!results) return null;

    return (
        <div className='ResultsWrapper'>
            {results.map((result, i) => <StationCard key={result.name + i} station={result} onClick={onResultClick} />)}
        </div>
    )
}


export const StationCard = ({station, onClick, onRemoveClick, className}) => {

    const noradId = station.satrec && station.satrec.satnum;

    console.log(station);

    var satrec = satellite.twoline2satrec(station.tle1, station.tle2);
    
    var positionAndVelocity = satellite.propagate(satrec, new Date());
    var positionEci = positionAndVelocity.position,
        velocityEci = positionAndVelocity.velocity;

    var gmst = satellite.gstime(new Date());

    var positionGd = satellite.eciToGeodetic(positionEci, gmst);

    var longitude = satellite.degreesLong(positionGd.longitude),
        latitude  = satellite.degreesLat(positionGd.latitude),
        height    = positionGd.height;

    console.log("Position " + longitude +" "+ latitude +" "+ height);
    return (
        <div className={'Result ' + (className || '')} onClick={e => onClick && onClick(station)}>
            <p>
                <span title={noradId ? 'NORAD ID: ' + noradId : null}>{station.name}</span>
            </p>
            <p className='small'>
                Latitude: {Math.round(latitude*1000)/1000}˚
            </p>
            <p className='small'>
                Longitude: {Math.round(longitude*1000)/1000}˚
            </p>
            <p className='small'>
                Height: {Math.round(height*1000)/1000} km
            </p>
        </div>
    )
}


export default SearchResults;