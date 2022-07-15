import React from 'react';
import Header from './Header';
import Paper from '@mui/material/Paper';
import { Weather } from './interfaces/Weather';

interface WeatherInfoProps {
    data: Weather
}

function WeatherInfo({ data }: WeatherInfoProps) {
    return (
        <>
            <Paper>
                {data.location.country}, {data.location.name}, {data.location.localtime}
            </Paper>
            <Paper>
                Current: <img src={`${data.current.condition.icon}`} alt={`${data.current.condition.text}`} />  - {data.current.condition.text}
            </Paper>
            <Paper>
                Details: Feels like: {data.current.feelslike_c}C, Feels like: 
            </Paper>
        </>
    );
}

export default WeatherInfo;
