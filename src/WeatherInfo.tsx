import React from 'react';
import Header from './Header';
import Paper from '@mui/material/Paper';
import { Weather } from './interfaces/Weather';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicTabs from './Tabs';


interface WeatherInfoProps {
    data: Weather
}

function WeatherInfo({ data }: WeatherInfoProps) {

    // const days = data.forecast.forecastday.map((a) => {
    //     return a.hour.map((b) => {
    //         return <Paper sx={{ display: 'flex', alignItems: 'center', width: "80%", margin: 'auto' }}>{b.time}, <img src={`${b.condition.icon}`} alt={`${b.condition.icon}`} />  - {b.condition.text}, clouds: {b.cloud}, Chance of Rain: {b.chance_of_rain}%, Humidity: {b.humidity}%, Temp: {b.temp_c}C, feels like: {b.feelslike_c}C</Paper>
    //     })
    // })

    // same as above, but map each forecast day into a "tab panel" then map over that in the map panel
    const forecastDays = data.forecast.forecastday.map((a) => {
        return a;
    })


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
                        {data.location.country}, {data.location.name}, {data.location.localtime}
                    </Typography>
                    <Typography variant="body2">
                        Current Temp: {data.current.temp_c}C
                        <br />
                        Feels like: {data.current.feelslike_c}C
                        <br />
                        Sunrise: {data.forecast.forecastday[0].astro.sunrise} Sunset: {data.forecast.forecastday[0].astro.sunset}
                    </Typography>
                </CardContent>
                <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-end' }}>
                    <Typography variant="body2">
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

            {/* {forecastDays} */}
            <BasicTabs forecastDays={forecastDays}></BasicTabs>
            {/* {days} */}
        </>
    );
}

export default WeatherInfo;
