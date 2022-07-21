import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherInfo from './WeatherInfo';
import { Weather } from './interfaces/Weather';
import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';


function WeatherContainer() {
    const [data, setData] = useState<Weather | undefined>();
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searching, setSearching] = useState<boolean>(false);

    const searchWeather = () => {
        setSearching(true);
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchTerm}&days=7&aqi=yes&alerts=yes`)
            .then(response => response.json())
            .then(data => setData(data)).then(() => setSearching(false));
    }

    useEffect(() => {
        if (data?.error?.code === 1006 || data?.error?.code === 1003) {
            notifyError('No matching location found.');
        }
    }, [data])

    const notifyError = (message: string) => toast.error(message);

    return (
        <>
            <Container style={{ display: 'flex', flexDirection: "row", marginTop: '40px', width: '100%' }}>
                <TextField sx={{ backgroundColor: 'white' }} value={searchTerm} onChange={(e: any) => setSearchTerm(e.target.value)}
                    fullWidth id="outlined-basic" label="Search By City/Town" variant="outlined" />
                <Button style={{color: 'white'}} onClick={searchWeather} variant="contained">Search</Button>
                <ToastContainer />
            </Container>
            <Box sx={{ width: '30%', margin: 'auto', marginTop: '20px' }}>
                {searching && <LinearProgress />}
            </Box>
            {data && data?.error?.code !== 1006 && data?.error?.code !== 1003 && <WeatherInfo data={data}></WeatherInfo>}
        </>
    );
}

export default WeatherContainer;
