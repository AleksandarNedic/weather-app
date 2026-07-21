
const weatherDiv = document.querySelector('#weather');
const day30Container = document.getElementById('day30-container');
day30Container.style.display = 'flex';
export function renderLocationInfo(data) {
    weatherDiv.innerHTML = `
        <div class="weather-card">
        <div class="weather-info">
        <div class="weather-text">
        <h2>${data.location.name}</h2>
    <h1>${data.current.temp_c}°C</h1>
    <p>${data.current.condition.text}</p>
    <div class="details">
        <p>💧 Humidity: ${data.current.humidity}%</p>
        <p>🌬 Wind: ${data.current.wind_kph} km/h</p>
    </div>
</div>
    <div class="weather-icon">
        <img src="${data.current.condition.icon}">
    </div>
</div>
</div>
  `;
}