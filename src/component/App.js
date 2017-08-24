import React, { Component } from "react";
import "./App.css";

import Price from "./Price.js";
import LandingPage from "./index/LandingPage.js";
import ToDo from './Todo/ToDo.js'
// i just import material-ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/price" component={Price} />
            <Route exact path="/todo" component={ToDo}  />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
