# Weather App 🌤️

A simple weather application built with JavaScript, Axios, WeatherAPI, and Webpack.

The app allows users to enter a location and displays current weather information with dynamic day and night themes based on the time of day.

## Features

- Search weather by location
- Get current temperature and weather conditions
- Display day/night mode automatically
- Dynamic background theme change
- API requests using Axios
- Bundled with Webpack

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Axios
- WeatherAPI
- Webpack
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/AleksandarNedic/weather-app.git
```

Navigate into the project folder:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## API

This project uses WeatherAPI to fetch current weather data.

You need your own API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

## Project Structure

```
weather-app/
│
├── src/
│   ├── index.html
│   ├── index.js
│   └── style.css
│
├── webpack.config.js
├── package.json
└── README.md
```

## Future Improvements

- Add weather forecast
- Add weather icons
- Improve UI design
- Add search history
- Add loading animation
- Add error handling

## Author

Aleksandar Nedic
