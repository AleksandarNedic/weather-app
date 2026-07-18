import axios from "axios";



const apiKey = '472620933754486cb2d183201261807'

console.log('radi')

let userLocation = '';


while(
    userLocation.trim() === ''
    )
{
    userLocation = prompt('Enter your location');
}

console.log(userLocation);
async function getWeather(){
    const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
        params: {
            key: apiKey,
            q: userLocation,
            aqi: 'no'
        }
    })
    let isDay = response.data.current.is_day;
    console.log(response.data);
    themeChange(isDay)


}
getWeather();

function themeChange(parametar) {
    const body = document.querySelector('body');
    if (parametar === 1) {
        body.classList.add('day');
        body.classList.remove('night');
    }
    else if (parametar === 0) {
        body.classList.add('night');
        body.classList.remove('day');
    }
}


