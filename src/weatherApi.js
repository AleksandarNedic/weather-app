import axios from "axios";
import { renderLocationInfo } from "./displayLocationInfo";
import { displayForecast } from "./displayForecast";


const apiKey = process.env.WEATHER_API_KEY;


export async function getWeather(value, themeChange) {
    try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
            params: {
                key: apiKey,
                q: value,
                aqi: 'no'
            }
        });
        renderLocationInfo(response.data)
        let isDay = response.data.current.is_day;

        if (themeChange) {
            themeChange(isDay);
        }
        return response.data;

    } catch (err) {
        console.log(err.response?.data || err.message)


    }}

export async function forcecastWeather(value, themeChange) {
    try{
        const forecastResponse = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
            params: {
                key: apiKey,
                q: value,
                aqi: 'no',
                days: 7
            }
        });
        console.log(forecastResponse.data);
        displayForecast(forecastResponse.data)

    }catch(err) {
        console.log(err)
    }
}





