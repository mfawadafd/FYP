import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function AirSearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "6758f3ba6dc6c4b8a6c5784fce1888d4";

    let getWeatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let Result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                temperature: jsonResponse.main.temp,
                feelslike: jsonResponse.main.feels_like,
                // humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                windSpeed: jsonResponse.wind.speed,
                weatherDescription: jsonResponse.weather[0].description
            }
            console.log(Result);
            return Result;
            // alert(`City: ${Result.city}, Country: ${Result.country}, Temperature: ${Result.temperature}°C, Humidity: ${Result.humidity}%, Pressure: ${Result.pressure} hPa, Wind Speed: ${Result.windSpeed} m/s, Weather Description: ${Result.weatherDescription}`);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }



    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            setCity("");
            let Newinfo = await getWeatherinfo();
            updateWeatherInfo(Newinfo);
        }
        catch (err) {
            console.log(err);
            setError(true);
        }

    }
    return (
        <div className="searchbox">
            <p className="text-xl font-bold mb-2">Weather Updates</p>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required value={city}
                    onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p className='text-red-500'>City not found</p>}
            {/* <p className='text-sm text-gray-500'>Powered by OpenWeatherMap</p> */}
        </div>
    )
}