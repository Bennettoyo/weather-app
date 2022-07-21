import React from 'react';
import Header from './Header';
import Paper from '@mui/material/Paper';
import { Weather } from './interfaces/Weather';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BasicTabs from './Tabs';
import Moment from 'react-moment';
import { Container } from '@mui/material';

interface WeatherInfoProps {
    data: Weather
}

function WeatherInfo({ data }: WeatherInfoProps) {

    return (
        <>
            <Container sx={{ display: 'flex' }}>
                <Card className='flex-container' sx={{ flexFlow: 'row wrap', margin: "auto", marginTop: '40px', marginBottom: '40px', display: 'flex', justifyContent: 'space-around' }} variant="outlined" >
                    <CardContent sx={{ flex: 4, order: 1 }}>
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
                    <CardContent sx={{ flex: 2, order: 2, display: 'flex', alignItems: 'flex-end' }}>
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
            </Container>


            <BasicTabs data={data}></BasicTabs>
        </>
    );
}

export default WeatherInfo;
