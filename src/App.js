import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './css/App.css';

const API_KEY = '1e04f58f77760dfaf5f952f7704aa976';

class App extends Component {
  state = {
    temperature: undefined,
    icon: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(data.cod == '404') {
      this.setState({
        temperature: undefined,
        icon: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Value is NOT correct...'
      });
    } else if(city) {
      this.setState({
        temperature: data.main.temp,
        icon: data.weather[0].icon,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        icon: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please, enter the values...'
      });
    }
    
  }
  render() {
    return (
      <div className="App">
        <div className="weather">
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather 
            temperature={this.state.temperature}
            icon={this.state.icon}
            city={this.state.city}
            country = {this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            />
          </div>
      </div>
    );
  }
}

export default App;
