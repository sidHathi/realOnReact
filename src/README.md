# Source Library
## REAL Website

This is the source directory of the React app. it contains all deployable files and modules as well as the index.js file used to build the app.

### Directories

* Search - Unused module for satellite searches
* Selection - Unused module for satellite selection when displaying multiple satellites in visualization
* animations - Module for animating the elements in the apps webpages
* assets - All visual assets for the applications
* css - The stylesheet
* navigation - Module containing code for building and running the app's navigation bar
* pages - Module containing the jsx code for the webpages
* satelliteDisplay - Module containing the code for getting satellite information from the Celestrak API, and compiling the data into the 3D visualization in the mission page

### App

Builds the React application into a single React element. Displayed using:

```js
<App />
```

### index.js

Configures the firebase connection and renders the `<App />` into the index.html file's root directory. Called in the webpages html file using:

```
<div id="root"></div>
```