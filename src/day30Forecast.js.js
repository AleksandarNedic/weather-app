import axios from "axios";
const apiKey = process.env.WEATHER_API_KEY;

export async function setUp30DayButton(location) {
    const now = new Date();
    const futureDate =  new Date(now);
    futureDate.setDate(now.getDate() + 30);

    const formatteDate = futureDate.toISOString().split("T")[0];

    const response = await axios.get('https://api.weatherapi.com/v1/future.json', {
        params: {
            key: apiKey,
            q: location,
            dt: formatteDate
        }
    })

    return response.data;
}
