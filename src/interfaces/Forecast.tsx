export interface Forecast {
    forecastday: [{
        date: string,
        day: {
            avghumidity: number
        },
        hour: hour[]
    }]
}

interface hour {
    time: string,
    temp_c: number
}