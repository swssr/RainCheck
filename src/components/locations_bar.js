/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import getCities from "../test_db/db";

class LocationsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 2,
      cities: [
        {
          name: "Lousville",
          state: "kentucky"
        },
        {
          name: "Durango",
          state: "califonia"
        },
        {
          name: "Concord",
          state: "new hampshire"
        },
        {
          name: "Houston",
          state: "alabama"
        },
        {
          name: "Brooklyn",
          state: "new york"
        },
        {
          name: "Brooklyn",
          state: "new york"
        }
      ]
    }; 
  }


  render() {
    const { cities, slideIndex } = this.state;

    console.log(`cities:`, getCities)
    return (
      <div className="bar bar--locations">
        <div className="city">
          <h3 className="city__name">{cities[slideIndex].name}</h3>
          <p className="city__state">{cities[slideIndex].state}</p>
        </div>
        <button className="btn btn--add">➕</button>
        <div className="indicators">
          {cities.map((x, i) => {
            return cities[slideIndex] === x ? 
            <span key={i} className="indicator active"></span> : 
            <span key={i} className="indicator"></span>
          })}
        </div>
      </div>
    );
  }
}

export default LocationsBar;
