# Satellite Display
## REAL Website

This module defines react.js objects that retreive satellite data from celestrak and display them using Three.js

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

