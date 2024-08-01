import React, { Component } from 'react';
import Navbar from "./component/Navbar"
import News from './component/News';
import './App.css';

class App extends Component {
  render() {
    console.log('App');
    return (
      <>
        <Navbar logoName="News" age="12" />
        <News />
      </>
    )
  }
}


export default App;
