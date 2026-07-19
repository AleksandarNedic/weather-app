//Imports
import { getWeather } from "./weatherApi.js";
import { forcecastWeather } from "./weatherApi.js";


const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    getWeather(inputElement.value, themeChange);
    forcecastWeather(inputElement.value, themeChange);

})






function themeChange(parametar) {
    const body = document.querySelector('body');

    if (parametar === 1) {
        body.classList.add('day');
        body.classList.remove('night');
    } else if (parametar === 0) {
        body.classList.add('night');
        body.classList.remove('day');
    }
}