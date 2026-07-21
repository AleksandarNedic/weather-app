/// Imports
import "./style.css";
import { getWeather, forcecastWeather } from "./weatherApi.js";
import { setUp30DayButton } from "./day30Forecast.js";
import { display30DayForecast } from "./display30DayForecast";

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const leftPanel = document.querySelector(".left-panel");
const forecastDiv = document.getElementById("forecast");

let userLocation = '';

formElement.addEventListener("submit", async (e) => {
    e.preventDefault();

     userLocation = inputElement.value.trim();

    if (userLocation === "") {
        return;
    }

    try {
        await getWeather(userLocation, themeChange);
        await forcecastWeather(userLocation);

        leftPanel.classList.add("show");
        forecastDiv.classList.add("show");

        inputElement.value = "";
    } catch (error) {
        console.error("Weather data could not be loaded:", error);
    }
});

function themeChange(parametar) {
    const body = document.querySelector("body");

    if (parametar === 1) {
        body.classList.add("day");
        body.classList.remove("night");
    } else if (parametar === 0) {
        body.classList.add("night");
        body.classList.remove("day");
    }
}


const day30Button = document.getElementById("show-30-days");
day30Button.addEventListener("click", async () =>  {
    const response=  await setUp30DayButton(userLocation);
    await display30DayForecast(response);
})

