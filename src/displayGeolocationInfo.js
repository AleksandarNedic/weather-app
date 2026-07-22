


export function currentLocationInfo(location) {
    const currentLocationWeather = document.querySelector("#current-location-weather");

    currentLocationWeather.innerHTML = `
     <div class="current-location-card">
            <h2>📍 Your Location</h2>
            <h3>${location.location.name}</h3>
            <p>${location.current.temp_c}°C</p>
            <p>${location.current.condition.text}</p>
        </div>
    `
}

