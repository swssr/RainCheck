import React, { Component } from "react";
// import getCities from "../test_db/db";
export default class AddLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      newCity: {
        name: "",
        state: ""
      }
    };
  }
  render() {
    console.log(this.state);

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="City name"
            onChange={e => this.setState({ newCity: { name: e.target.value } })}
          />
          <input type="text" 
          placeholder="State / Province" 
          onChange={e => this.setState({ newCity: { state: e.target.value } })}
          />
          <button className="btn btn--success" 
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            this.setState({cities: this.state.cities.push(this.state.newCity)})
          }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
