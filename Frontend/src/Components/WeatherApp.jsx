import { useState, useEffect } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

function WeatherApp() {
  const [weatherinfo, setWeatherinfo] = useState(
    {
      city: "Peshawar",
      country: "PK",
      temperature: 25,
      feelslike: 27,
      humidity: 80,
      airCondition: "Good",
      windSpeed: 5,
      pressure: 1013,
      // Air_Quality: 50,
      weatherDescription: "Sunny"

    }
  );
  let updateWeatherInfo = (Newinfo) => {
    setWeatherinfo(Newinfo);
  }

  return (
    <div className="weather-card">

      {/* Add weather functionality here */}
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}

export default WeatherApp;
