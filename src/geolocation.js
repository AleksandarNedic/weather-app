import {getWeather} from "./weatherApi";
import { currentLocationInfo } from "./displayGeolocationInfo";

export  function getLocation() {

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async(position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const location = `${latitude},${longitude}`;
        const weatherData = await getWeather(location);
        currentLocationInfo(weatherData);

    });

}



