import React from 'react';
import Header from './Header';
import Paper from '@mui/material/Paper';
import { Weather } from './interfaces/Weather';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicTabs from './Tabs';
import Moment from 'react-moment';

interface WeatherInfoProps {
    data: Weather
}

function WeatherInfo({ data }: WeatherInfoProps) {

    return (
        <>
            <Card variant="outlined" sx={{ width: "40%", margin: "auto", marginTop: '40px', marginBottom: '40px', display: 'flex', justifyContent: 'flex-start' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Today
                    </Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h4" component="div">
                        {data.current.condition.text}
                        <img src={`${data.current.condition.icon}`} alt={`${data.current.condition.text}`} />
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {data.location.country}, {data.location.name}, <Moment format='Do MMM YYYY, hh:mm A'>{data.location.localtime}</Moment>
                    </Typography>
                    <Typography>
                        Current Temp: {data.current.temp_c}C
                        <br />
                        Feels like: {data.current.feelslike_c}C
                        <br />
                        Sunrise: {data.forecast.forecastday[0].astro.sunrise} Sunset: {data.forecast.forecastday[0].astro.sunset}
                    </Typography>
                </CardContent>
                <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                    <Typography>
                        Gust: {data.current.gust_mph}mph
                        <br />
                        Wind Degrees: {data.current.wind_degree}
                        <br />
                        Wind Direction: {data.current.wind_dir}
                        <br />
                        Humidity: {data.current.humidity}%
                    </Typography>
                </CardContent>
            </Card>

            <BasicTabs data={data}></BasicTabs>
        </>
    );
}

export default WeatherInfo;
