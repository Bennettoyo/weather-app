export interface Weather {
    location: {
        country: string,
        name: string,
        region: string,
        localtime: string,
    },
    current: {
        temp_c: number,
        temp_f: number,
        feelslike_c: number,
        feelslike_f: number,
        gust_kph: number,
        gust_mph: number,
        humidity: number,
        wind_degree: number,
        wind_dir: string,
        wind_kph: number,
        wind_mph: number,
        condition: {
            code: number,
            icon: string,
            text: string,
        }
    },
    // forecast: {
    //     forecastday: [{

    //     }]
    // },
    error: {
        code: number
        message: string
    }
}
