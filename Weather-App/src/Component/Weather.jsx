import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiKey = '61fffabc269f11c54dfd59ca9ffd3cb0';

    const fetchWeatherData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            if (response.ok) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setError('City not found');
                setWeatherData(null);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('An error occurred while fetching data');
            setLoading(false);
        }
    };

    useEffect(() => {
        if (city !== '') {
            fetchWeatherData();
        }
    }, [city]);

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
                {error && <p className="text-red-500">{error}</p>}
                {weatherData && !error && (
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">
                            {weatherData.name}, {weatherData.sys.country}
                        </h2>
                        <table className="mt-2 table-auto">
                            <tbody>
                            <tr>
                                <td className="font-semibold">Temperature:</td>
                                <td>{weatherData.main.temp}°C</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Weather:</td>
                                <td>{weatherData.weather[0].description}</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Humidity:</td>
                                <td>{weatherData.main.humidity}%</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Wind Speed:</td>
                                <td>{weatherData.wind.speed} m/s</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">Cloudiness:</td>
                                <td>{weatherData.clouds.all}%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
