import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

import ReceipsList from "./components/ReceipsList";

class App extends Component {
  // default state object
  state = {
    receips: []
  };

  componentDidMount() {
    axios
      .get("http://food2fork.com/api/search?key=f5195763ead5821e9b8fefea0608abc4&q=shredded%20chicken")
      .then(response => {
        // create an array of contacts only with relevant data
        const newReceips = response.data.recipes;

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          receips: newReceips
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MY List Demo</h1>
        </header>

        <ReceipsList receips={this.state.receips} />
      </div>
    );
  }
}

export default App;
