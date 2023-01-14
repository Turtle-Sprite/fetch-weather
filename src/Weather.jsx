import React, {Component} from "react";
import axios from 'axios'

export default class Weather extends Component {
    state = {
        zipCodeInput: '',
        currentTemp: '',
        weather: {}
    }

    handleZipCodeChange = (e) => {
        // console.log('change', e.target.value)
        this.setState({
            zipCodeInput: e.target.value
        })
    }

    handleSubmit = async (e) => {
        try{
            e.preventDefault()
            const country_code ='us'
            const API_KEY = '463fb235383105e3e6a95e2df497e6e9'
            const url = `http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCodeInput},${country_code}&appid=${API_KEY}&units=imperial`
            const response = await axios.get(url)
            console.log(response.data)
            this.setState({
                currentTemp: response.data.main.temp,
                weather: response.data
            })
        } catch(err) {
            console.log(err)
        }
    }

    render() {

        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="zipCodeInput">Enter Zip Code</label>
                <input 
                type="text" 
                onChange={this.handleZipCodeChange}
                value={this.state.zipCodeInput}
                />

                <button className="btn" type="submit">See Weather Forecast</button>
            </form>

            <p className="descrText">Current Temperature: </p> 
            <p><span className="currTemp">{this.state.weather.main?.temp}</span></p>
            <p className="descrText">Temp High: <span className="weatherInfo">{this.state.weather.main?.temp_max}</span></p>
            <p className="descrText">Temp Low: <span className="weatherInfo">{this.state.weather.main?.temp_min}</span> </p>
            <p className="descrText">Weather Description: <span className="weatherInfo">{this.state.weather.weather?.[0].description}</span></p>
            <p className="descrText">City: <span className="weatherInfo">{this.state.weather.name}</span></p>
            </>

        )
    }
}