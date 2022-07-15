import React, { useEffect, useState } from 'react';
import Header from './Header';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherInfo from './WeatherInfo';
import { Weather } from './interfaces/Weather';

function WeatherContainer() {
    const [data, setData] = useState<Weather>();
    const [searchTerm, setSearchTerm] = useState<string>()

    const searchWeather = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=472912f426fb463c925124814221507&q=${searchTerm}&days=7&aqi=yes&alerts=yes`)
            .then(response => response.json())
            .then(data => setData(data)).then();
        if (data?.error.code === 1006 || data?.error.code === 1003) {
            notifyError('No matching location found.');
        }
    }

    const notifyError = (message: string) => toast.error(message);

    return (
        <>
            <Container style={{ display: 'flex', flexDirection: "row", marginTop: '40px' }}>
                <TextField value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)}
                    fullWidth id="outlined-basic" label="Search By Country Or City" variant="outlined" />
                <Button onClick={searchWeather} variant="contained">Search</Button>
                <ToastContainer />
            </Container>
            {data && <WeatherInfo data={data}></WeatherInfo>}
        </>
    );
}

export default WeatherContainer;
