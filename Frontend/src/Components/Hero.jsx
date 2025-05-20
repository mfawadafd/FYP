
// import React from 'react';
// import WeatherApp from './weatherapp';
// import AirApp from './AirApp';

// function Hero() {
//   return (
//     <div className="min-h-screen w-full bg-gray-50 py-10 px-4 ">
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
//         {/* Card 1: Weather */}
//         <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3 bg-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800">Weather Forecast</h2>
//           <WeatherApp />
//         </section>

//         {/* Card 2: Air Pollution */}
//         <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3">
//           <h2 className="text-xl font-semibold text-gray-800">Air Quality</h2>
//           <img
//             src="https://picsum.photos/400/300?air-pollution"
//             alt="Air pollution illustration"
//             className="rounded-lg object-cover w-full h-40"
//           />
//           <p className="text-sm text-gray-600">Get real-time details about air quality and pollution levels.</p>
//           <AirApp />
//         </section>

//         {/* Card 3: Traffic */}
//         <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3">
//           <h2 className="text-xl font-semibold text-gray-800">Traffic Conditions</h2>
//           <img
//             src="https://picsum.photos/400/300?traffic"
//             alt="Traffic conditions illustration"
//             className="rounded-lg object-cover w-full h-40"
//           />
//           <p className="text-sm text-gray-600">Live traffic updates to help you plan your route.</p>
//           {/* Add traffic component here in future */}
//         </section>

//         {/* Card 4: To-Do App */}
//         <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3">
//           <h2 className="text-xl font-semibold text-gray-800">To-Do App</h2>
//           <p className="text-sm text-gray-600">Manage your tasks and stay productive.</p>
//           {/* Add your To-Do app component here */}
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from 'react';
import WeatherApp from './weatherapp';
import AirApp from './AirApp';

function Hero() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className=" bg-opacity-80 backdrop-blur-sm rounded-lg p-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {/* Card 1: Weather */}
          <section className="">
            <h2 className="text-xl font-semibold text-gray-800">Weather Forecast</h2>
            <WeatherApp />
          </section>

          {/* Card 2: Air Pollution */}
          <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3 bg-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Air Quality</h2>
            <img
              src="https://picsum.photos/400/300?air-pollution"
              alt="Air pollution illustration"
              className="rounded-lg object-cover w-full h-40"
            />
            <p className="text-sm text-gray-600">Get real-time details about air quality and pollution levels.</p>
            <AirApp />
          </section>

          {/* Card 3: Traffic */}
          <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3 bg-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">Traffic Conditions</h2>
            <img
              src="https://picsum.photos/400/300?traffic"
              alt="Traffic conditions illustration"
              className="rounded-lg object-cover w-full h-40"
            />
            <p className="text-sm text-gray-600">Live traffic updates to help you plan your route.</p>
            {/* Add traffic component here in future */}
          </section>

          {/* Card 4: To-Do App */}
          <section className="card bg-base-200 shadow-lg rounded-2xl p-4 space-y-3 bg-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">To-Do App</h2>
            <p className="text-sm text-gray-600">Manage your tasks and stay productive.</p>
            {/* Add your To-Do app component here */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;
