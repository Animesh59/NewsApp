import React, { Component } from 'react';
import Navbar from "./component/Navbar"
import News from './component/News';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    console.log('`````` App Rendered ```````');
    return (
      <>
        <Router>
          <Navbar logoName="News" />
          <Switch>
            <Route exact path="/entertainment"><News category="entertainment" key="entertainment" /></Route>
            <Route exact path="/business"><News category="business" key="business" /></Route>
            <Route exact path="/science"><News category="science" key="science" /></Route>
            <Route exact path="/health"><News category="health" key="health" /></Route>
            <Route exact path="/sports"><News category="sports" key="sports" /></Route>
            <Route exact path="/technology"><News category="technology" key="technology" /></Route>
            <Route exact path="/" ><News category="general" key="general" /></Route>
            <Route exact path="/" ><News category="general" key="general" /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}


export default App;
