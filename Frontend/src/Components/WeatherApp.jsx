// import { useState, useEffect } from 'react';
// import SearchBox from './SearchBox';
// import InfoBox from './infoBox';

// function WeatherApp() {
//   const [weatherinfo, setWeatherinfo] = useState(
//     {
//       city: "Peshawar",
//       country: "PK",
//       temperature: 25,
//       feelslike: 27,
//       humidity: 80,
//       airCondition: "Good",
//       windSpeed: 5,
//       pressure: 1013,
//       // Air_Quality: 50,
//       weatherDescription: "Sunny"

//     }
//   );
//   let updateWeatherInfo = (Newinfo) => {
//     setWeatherinfo(Newinfo);
//   }

//   return (
//     <div className="weather-card">

//       {/* Add weather functionality here */}
//       <SearchBox updateWeatherInfo={updateWeatherInfo} />
//       <InfoBox info={weatherinfo} />
//     </div>
//   );
// }

// export default WeatherApp;
import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './infoBox';

function WeatherApp() {
  const [weatherinfo, setWeatherinfo] = useState({
    city: "Peshawar",
    country: "PK",
    temperature: 25,
    feelslike: 27,
    humidity: 80,
    airCondition: "Good",
    windSpeed: 5,
    pressure: 1013,
    weatherDescription: "Sunny"
  });

  const updateWeatherInfo = (newInfo) => {
    setWeatherinfo(newInfo);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm mx-auto space-y-3">
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}

export default WeatherApp;
