import axios from 'axios';

const API_KEY = "9066d11a6941bb57bf76ad5437fb8fe3";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

// Need an action to change state (add weather data to it)
// Here is our action creator that we'll export:
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}