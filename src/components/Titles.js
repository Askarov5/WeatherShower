import React from "react";

export default class Titles extends React.Component {
    render() {
        return (
            <div className="weather-header">
                <h1 className="weather-header__title">Weather Shower</h1>
                <p className="weather-header__subtitle">Write a City name and Country code</p>
            </div>
        );
    }
};