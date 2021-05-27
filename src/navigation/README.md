# Nagivation
## REAL website

Builds and exports a styled react.js navbar. Combines the react-router-dom paging library for react applications with Bootstrap CSS's navbar. Includes custom stylization.

### Usage

The navbar exists as a `<Navigation />` object within a react-dom `<Router />` react object. The links in the navbar control the paths in a react-dom Switch.

Sample Implementation:

```js
<Router>
    <Navigation />
    <Switch>
    </Switch>
</Router>
```