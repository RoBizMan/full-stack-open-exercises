import { useEffect, useState } from 'react'
import axios from 'axios'

const CityWeather = ({ country }) => {
    const [weatherData, setWeatherData] = useState(null);
    const api_key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

    useEffect(() => {
        if (country.capital) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}&units=metric`)
                .then(response => {
                    setWeatherData(response.data);
                })
        }
    }, [country.capital, api_key]);

    if (!weatherData) {
        return <p>Loading weather data...</p>;
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            {weatherData && (
                <div>
                    <h2>Weather in {country.capital}</h2>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                    <p>Wind: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div >
    )
}

export default CityWeather