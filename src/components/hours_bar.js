import React, { Component } from 'react'

const HourPill = (props) => {
  return (
    <div className="hour--pill">
      <div className="time">{props.time}</div>
      <div className="icon">❄</div>
      <div className="temp_read">{props.temp}</div>
    </div>
  )
}

export default class HoursBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourForecast: [
        {
          time: "12:00",
          temp: 31,
          summary: "Fucking Hot"
        },
        {
          time: "3:00",
          temp: 20,
          summary: "Mild"
        },
        {
          time: "17:00",
          temp: 10,
          summary: "Oh no, it's getting chilly"
        },
        {
          time: "20:00",
          temp: 31,
          summary: "Fucking Hot, again!"
        },
        {
          time: "23:00",
          temp: 20,
          summary: "You're still awake, what are you doing!?"
        },
        {
          time: "01:00",
          temp: 16,
          summary: "You're fucking sick!"
        }
      ]
    };
  }

  render() {
    return (
      <div className="bar--hours">
        {this.state.hourForecast.map(({ time, temp }, index) => (
          <HourPill key={index} time={time} temp={temp} />
        ))}
      </div>
    )
  }
}
