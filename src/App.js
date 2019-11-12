import React from "react";
import Forecast1Day from "./Forecast1Day";
import './App.css'

// day: 2,
// temperature: 31.6,
// icon: "1",
// description: "Sunny"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: []
    };
  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast")
      .then(res => res.json())
      .then(days => {
        this.setState({ days });
        console.log(days);
      });
  }

  render() {
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
      <div className="weather">
        {this.state.days.map(day => {
          return (
            <div>
              <Forecast1Day
                day={weekdays[day.day]}
                temperature={day.temperature}
                icon={day.icon}
                description={day.description}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
