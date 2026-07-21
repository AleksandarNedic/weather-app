const forecastDiv = document.getElementById('forecast');


export function displayForecast(data) {

    forecastDiv.innerHTML = '';
    data.forecast.forecastday.forEach(day => {
        const date = new Date(day.date);

        const dayName = date.toLocaleDateString('en-US', {
            weekday: 'long'})

        forecastDiv.innerHTML += `
            <div class="forecast-card">
                <h3>${dayName}</h3>

                <img src="${day.day.condition.icon}">

                <h2>${day.day.avgtemp_c}°C</h2>

                <p>${day.day.condition.text}</p>

            </div>
            
        `;

    });

}