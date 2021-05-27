# Satellite Display
## REAL Website

This module defines react.js objects that retreive satellite data from celestrak and display them using Three.js.

Built on code from https://github.com/dsuarezv/satellite-tracker by dsuarezv

## engine.js

The engine class defines a JavaScript object that stores and retreives satellite data from the celestrak TLE API, and uses the data to build and update Three.js geometries representing the satellites and their orbits relative to the Earth.

### Usage

The engine is constructed using the `engine.initialize` function, which takes in the react container in which the the visualization is being displayed, and sets up event handlers. Satellite information is retreived from celestrak using `engine.addCelestrakSets`. Satellites are added to the visualization using `engine.addSatellite`. Orbit paths are constructed and removed using using `engine.addOrbit`, and `engine.removeOrbit`. The positions of the satellites in the scene are updated using `engine.updateSatellitePosition`. The engine is removed from the scene using `engine.dispose`. The engine class contains private functionality for building the satelites and Earth into a Three.js scene.

### Exported Function Prototypes

```js
initialize(container, options = {});
dispose();
addSatellite(station, color, size);
loadLteFileStations(url, color, stationOptions);
addOrbit(station);
removeOrbit(station);
updateSatellitePosition(station, date);
updateAllPositions(date);
```

##### Event Handler Function Prototypes

```js
handleWindowResize();
handleMouseDown(e);
```

##### Three.js private functions

```js
 _addTleFileStations(lteFileContent, color, stationOptions);
_getSatelliteMesh(color, size);
_getSatelliteSprite(color, size)
_getSatellitePositionFromTle(station, date)
_setupScene();
_setupCamera(width, height);
_setupLights();
_addBaseObjects();
_addEarth();
_findStationFromMesh(threeObject);
```

## SatDisplay

The SatDisplay class defines a React.js object that leverages the engine defined in engine.js to render the satellite visualization for web viewing.

### Usage

The SatDisplay can be added to any React scene using:

```js
<SatDisplay />
```

### Function Prototypes


##### Rendering Functions

```js
componentDidMount();
componentWillUnmount();
processQuery(stations);
findStationById(stations, id);
handleStationClicked(station);
toggleSelection(station);
addStations();
addCelestrakSets();
addAmsatSets();
handleTimer();
```

##### Unused Functions

The class also contains code for selecting and searching satellites that comes from dsuarez's original satellite visualization project. While they aren't used currently, they do have potential for future implementation.

```js
isSelected(station);
selectStation(station);
deselectStation(station);
handleSearchResultClick(station);
handleRemoveSelected(station);
handleRemoveAllSelected();
```

## tle.js

The tle.js file contains library functions for parsing output from the celestrak TLE API, and converting between coordinate systems.

##### Function prototypes

```js
parseTleFile(fileContent, stationOptions);
latLon2Xyz(radius, lat, lon);
toThree(v);
getSolution(station, date);
getPositionFromTle(station, date, type = 1);
```