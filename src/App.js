import React, { Component } from "react";
import LocationsBar from "./components/locations_bar";
import Details from "./components/details";
import HoursBar from "./components/hours_bar";

class App extends Component {
  render() {
    return (
      <div className="app">
        <LocationsBar />
        <Details />
        <HoursBar />
      </div>
    );
  }
}

export default App;
