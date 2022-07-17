import { Forecast } from "./Forecast"

export interface Weather {
    location: {
        country: string,
        name: string,
        region: string,
        localtime: string,
    },
    current: {
        temp_c: number,
        feelslike_c: number,
        last_updated: string,
        gust_mph: number,
        humidity: number,
        wind_degree: number,
        wind_dir: string,
        wind_mph: number,
        vis_miles: number,
        uv: number,
        condition: {
            code: number,
            icon: string,
            text: string,
        }
    },
    forecast: Forecast,
    error: {
        code: number
        message: string
    }
}

