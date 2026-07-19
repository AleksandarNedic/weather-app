
const weatherDiv = document.querySelector('#weather');

export function renderLocationInfo(data) {
    weatherDiv.innerHTML = `
    <div class="weather-card">

            <h2>${data.location.name}</h2>

            <img src="${data.current.condition.icon}">

            <h1>${data.current.temp_c}°C</h1>

            <p>${data.current.condition.text}</p>

            <div class="details">
                <p>💧 Humidity: ${data.current.humidity}%</p>
                <p>🌬 Wind: ${data.current.wind_kph} km/h</p>
            </div>

        </div>
  `;
}