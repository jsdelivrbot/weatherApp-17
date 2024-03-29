import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {
  renderWeather(cityData){
    console.log(cityData);
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;
    return(
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={temps} color="red" units="K"/>
        </td>
        <td>
          <Chart data={pressures} color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="black" units="%"/>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {
    weather : state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
