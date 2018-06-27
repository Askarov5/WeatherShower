import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit ={this.props.getWeather} className="weather-inputs">
                <input type="text" name="city" placeholder="Bishkek" className="weather-inputs__city"/>
                <input type="text" name="country" placeholder="KG" className="weather-inputs__country"/>
                <button type="submit" className="weather-inputs__submit">Show</button>
            </form>
        );
    }
};
