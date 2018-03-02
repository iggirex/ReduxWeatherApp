import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);


        return (
            <tr className="city-data" key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="pink" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
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
        )
    }
}

// function mapStateToProps(state) {
//     // this is weather because we use 'weather' key in combineReducers
//     return { weather: state.weather }
// }
// This above is adentical to sugary syntax BELOW:
function mapStateToProps({ weather }) {
    // this is weather because we use 'weather' key in combineReducers
    // return { weather: weather } --> same as
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);