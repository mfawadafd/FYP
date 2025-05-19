import React from 'react';
import WeatherApp from './weatherapp'; // Corrected import statement
import AirApp from './AirApp';

function Hero() {
  return (
    <div>
      <>
        <div className="hero p-4 max-w-screen-2x1 mx-auto md:px-20 px-4">
          <div className="carousel w-full h-[500px] rounded-lg">
            <div id="item1" className="carousel-item w-full h-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* Card 1: Weather */}
            <div className="card bg-base-200 shadow-lg p-4 rounded-lg">
              <WeatherApp /> {/* Corrected component usage */}
            </div>

            {/* Card 2: Air Pollution Level */}
            <div className="card bg-base-200 shadow-lg p-4 rounded-lg">
              {/* <img src="https://picsum.photos/400/300?air pollution" alt="Air Pollution Level" />
              <p>Details about air quality and pollution levels.</p> */}
              <AirApp /> {/* Corrected component usage */}
            </div>

            {/* Card 3: Traffic */}
            <div className="card bg-base-200 shadow-lg p-4 rounded-lg">
              <img src="https://picsum.photos/400/300?Traffic" alt="Traffic condtitions" />
              <p>Details about traffic conditions.</p>
              {/* Add traffic functionality here */}
            </div>

            {/* Card 4: To-Do App */}
            <div className="card bg-base-200 shadow-lg p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">To-Do App</h2>
              <p>Manage your tasks efficiently.</p>
              {/* Add To-Do App functionality here */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Hero;