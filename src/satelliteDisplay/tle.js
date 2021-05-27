/**
 * tle.js
 * 
 * Module containing functions for parsing data from celestrak TLE API
 */

import * as satellite from 'satellite.js/lib/index';

// Class Constants
export const EarthRadius = 6371;
const rad2Deg = 180 / 3.141592654;

/**
 * parseTleFile
 * 
 * Splits a tle file into an array of structs containing the TLE's name
 * and the the TLEs themselves.
 * 
 * @param {*} fileContent TLE contents returned from the API
 * @param {*} stationOptions Display options for the station
 * @returns 
 */
export const parseTleFile = (fileContent, stationOptions) => {
    const result = [];
    const lines = fileContent.split("\n");
    let current = null;

    for (let i = 0; i < lines.length; ++i) {
        const line = lines[i].trim();

        if (line.length === 0) continue;

        console.log(line)
        if (line[0] === '1') {
            current.tle1 = line;
        }
        else if (line[0] === '2') {
            current.tle2 = line;
        }
        else {
            current = { 
                name: line, 
                ...stationOptions
            };
            console.log(current.name);
            if (current.name === "FIREBIRD 4"){
                result.push(current);
            }
        }
    }

    return result;
}


// __ Satellite locations _________________________________________________


/**
 * latLong2Xyz
 * 
 * Function that converts between the satellites latitude and longitude
 * and it's xyz locations in the Three.js scene
 * 
 * @param {*} radius 
 * @param {*} lat 
 * @param {*} lon 
 * @returns xyz coords
 */
const latLon2Xyz = (radius, lat, lon) => {
    var phi   = (90-lat)*(Math.PI/180)
    var theta = (lon+180)*(Math.PI/180)

    const x = -((radius) * Math.sin(phi) * Math.cos(theta))
    const z = ((radius) * Math.sin(phi) * Math.sin(theta))
    const y = ((radius) * Math.cos(phi))

    return { x, y, z };
}

/**
 * toThree
 * 
 * Converts a vector to a Three.js vector
 * 
 * @param {*} v Struct containing x, y, and z vals
 * @returns The Three.js vector
 */
const toThree = (v) => {
    return { x: v.x, y: v.z, z: -v.y };
}

/**
 * getSolution
 * 
 * Uses the satelite.js module to return a satellite object
 * for the TLE station.
 * 
 * @param {*} station 
 * @param {*} date 
 * @returns 
 */
const getSolution = (station, date) => {
    
    if (!station.satrec) {
        const { tle1, tle2 } = station;
        if (!tle1 || !tle2) return null;
        station.satrec = satellite.twoline2satrec(tle1, tle2);;
    }

    return satellite.propagate(station.satrec, date);
}


// type: 1 ECEF coordinates   2: ECI coordinates
/**
 * getPositionFromTle
 * 
 * Returns the position of a satellite from it's TLE
 * 
 * @param {*} station 
 * @param {*} date 
 * @param {*} type 
 * @returns 
 */
export const getPositionFromTle = (station, date, type = 1) => {
    if (!station || !date) return null;

    const positionVelocity = getSolution(station, date);

    const positionEci = positionVelocity.position;
    if (type === 2) return toThree(positionEci);

    const gmst = satellite.gstime(date);

    if (!positionEci) return null;  // Ignore 

    const positionEcf = satellite.eciToEcf(positionEci, gmst);
    return toThree(positionEcf);
}