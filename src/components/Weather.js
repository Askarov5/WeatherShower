import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
            <div className="weather-infos">
                {this.props.city && this.props.country && <p  className="weather-infos__loc">{this.props.city}, {this.props.country}</p>}
                {this.props.icon && this.props.description && <p  className="weather-infos__desc"><img src={'http://openweathermap.org/img/w/'+ this.props.icon + '.png'} /> {this.props.description}</p>}
                
                {this.props.temperature && <p  className="weather-infos__temp"><span>Temperature:</span> {this.props.temperature} C</p>}
                {this.props.humidity && <p  className="weather-infos__hum"><span>Humidity:</span> {this.props.humidity}</p>}

                {this.props.error && <p  className="weather-infos__err">*{this.props.error}</p>}           
            </div>
        )
    }
};
