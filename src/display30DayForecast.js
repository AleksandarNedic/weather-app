
const day30Container = document.getElementById("day30-container");


export async function display30DayForecast(response) {
    console.log(response);
    day30Container.innerHTML = `
   <div class="day30-card">
            <h2>${response.location.name}, ${response.location.country}</h2>

            <p><strong>Date:</strong> ${response.forecast.forecastday[0].date}</p>

            <img
                src="https:${response.forecast.forecastday[0].day.condition.icon}"
                alt="Weather Icon"
            >

            <p><strong>Condition:</strong> ${response.forecast.forecastday[0].day.condition.text}</p>

            <p><strong>Average Temperature:</strong> ${response.forecast.forecastday[0].day.avgtemp_c}°C</p>

            <p><strong>Maximum Temperature:</strong> ${response.forecast.forecastday[0].day.maxtemp_c}°C</p>

            <p><strong>Minimum Temperature:</strong> ${response.forecast.forecastday[0].day.mintemp_c}°C</p>

            <p><strong>Chance of Rain:</strong> ${response.forecast.forecastday[0].day.daily_chance_of_rain}%</p>

            <p><strong>Max Wind:</strong> ${response.forecast.forecastday[0].day.maxwind_kph} km/h</p>

            <p><strong>Sunrise:</strong> ${response.forecast.forecastday[0].astro.sunrise}</p>

            <p><strong>Sunset:</strong> ${response.forecast.forecastday[0].astro.sunset}</p>
        </div>
`;
}

