import React from "react";
import "./Forecast1Day.css"

// day: 2,
// temperature: 31.6,
// icon: "1",
// description: "Sunny"

class Forecast1Day extends React.Component {
    
  render() {
    return (
      <div className="Forecast1Day">
        <h1>{this.props.day}</h1>
        <img src={require(`./icons/${this.props.icon}.png`)} />
        <p>{this.props.temperature + ' °'}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Forecast1Day;