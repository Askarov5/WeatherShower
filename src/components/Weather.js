import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div className="weather-infos">
                {this.props.city && this.props.country && <p  className="weather-infos__loc">{this.props.city}, {this.props.country}</p>}
                {this.props.description && <p  className="weather-infos__desc">{this.props.description}</p>}
                
                {this.props.temperature && <p  className="weather-infos__temp"> Temperature: {this.props.temperature} C</p>}
                {this.props.humidity && <p  className="weather-infos__hum">Humidity: {this.props.humidity}</p>}
                
                {this.props.error && <p  className="weather-infos__err">*{this.props.error}</p>}           
            </div>
        )
    }
};
