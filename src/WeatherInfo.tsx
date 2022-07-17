import React from 'react';
import Header from './Header';
import Paper from '@mui/material/Paper';
import { Weather } from './interfaces/Weather';

interface WeatherInfoProps {
    data: Weather
}

function WeatherInfo({ data }: WeatherInfoProps) {

    const days = data.forecast.forecastday[0].hour.map((a) => {
        return <Paper>{a.time}, temp: {a.temp_c}</Paper>
    })

    return (
        <>
            <Paper>
                {data.location.country}, {data.location.name}, {data.location.localtime}
            </Paper>
            <Paper>
                Current: <img src={`${data.current.condition.icon}`} alt={`${data.current.condition.text}`} />  - {data.current.condition.text}, current temp: {data.current.temp_c}C, last updated: {data.current.last_updated},
                UV: {data.current.uv}, Visibility: {data.current.vis_miles}
            </Paper>
            <Paper>
                Details: Feels like: {data.current.feelslike_c}C, Humidity: {data.current.humidity}
            </Paper>
            <Paper>
                Wind: Gust: {data.current.gust_mph}mph, Wind Degrees: {data.current.wind_degree}, Wind Direction: {data.current.wind_dir},  Humidity: {data.current.humidity}
            </Paper>
            {days}
        </>
    );
}

export default WeatherInfo;
