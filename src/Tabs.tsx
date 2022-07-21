import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Forecast, hour } from "./interfaces/Forecast"
import { Weather } from './interfaces/Weather';
import { Paper } from '@mui/material';
import Moment from 'react-moment';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface WeatherInfoProps {
    data: Weather
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs({ data }: WeatherInfoProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const forecastDays = data.forecast.forecastday.map((a, i) => {
        return (
            <TabPanel key={i} value={value} index={i}>
                {forecastDay(a)}
            </TabPanel>
        )
    })

    const forecastDaysTabs = data.forecast.forecastday.map((a, i) => {
        return (
            <Tab key={i} label={<Moment format='ddd Do'>{a.date}</Moment>} {...a11yProps(i)} />
        )
    })

    function forecastDay(data: any) {
        return data.hour.map((b: any, i: number) => {
            return (
                <Paper key={i} sx={{
                    display: 'flex', width: '65%', flexFlow: 'row wrap', justifyContent: 'space-around', alignItems: 'center', margin: 'auto', marginBottom: '5px', padding: '2px',
                    '@media screen and (max-width: 900px)': {
                        width: '100%',
                    },
                }}>
                    <img src={`${b.condition.icon}`} alt={`${b.condition.icon}`} />
                    <span style={{ flexGrow: 2 }}>
                        <b>{b.condition.text}</b> - Temp: {b.temp_c}C,  Chance of Rain: {b.chance_of_rain}%, Humidity: {b.humidity}%
                    </span>
                    <span style={{ marginRight: '10px' }}>
                        <Moment format='hh:mm A'>{b.time}</Moment>
                    </span>
                </Paper>
            )
        })
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
                    {forecastDaysTabs}
                </Tabs>
            </Box>
            {forecastDays}
        </Box>
    );
}
