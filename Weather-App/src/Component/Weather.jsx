// src/components/Weather.js

import React, { useState } from 'react';
import Navbar from "./Navbar.jsx";
const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const apiKey ="61fffabc269f11c54dfd59ca9ffd3cb0";

    const fetchWeatherData = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold mb-4">Weather App</h1>
                <input
                    type="text"
                    placeholder="Enter a city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 border rounded-md"
                />
                <button
                    onClick={fetchWeatherData}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    Get Weather
                </button>
                {loading && <p>Loading...</p>}
                {weatherData && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <p className="mt-2 text-lg">
                            Temperature: {weatherData.main.temp}°C
                        </p>
                        <p className="mt-2 text-lg">
                            Weather: {weatherData.weather[0].description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
