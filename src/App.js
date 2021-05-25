import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Mission from "./pages/mission";
import Science from "./pages/science";
import Team from "./pages/team";
import Tech from "./pages/tech";
import Navigation from "./navigation/navigation";
import ScrollToTop from "./navigation/ScrollToTop";

class App extends React.Component{
    render(){
        if (module.hot) {
            module.hot.accept();
        }
        return(
            <div className="App">
              <Router>
                <ScrollToTop />
                <Navigation />
                <Switch>
                  <Route path="/" exact component={() => <Home />} />
                  <Route path="/mission" exact component={() => <Mission />} />
                  <Route path="/science" exact component={() => <Science />} />
                  <Route path="/tech" exact component={() => <Tech />} />
                  <Route path="/team" exact component={() => <Team />} />
                </Switch>
              </Router>
            </div>
        );
    }
}
if (module.hot) {
    module.hot.accept();
}

export default App;