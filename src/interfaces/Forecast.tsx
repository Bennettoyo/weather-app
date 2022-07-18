export interface Forecast {
    forecastday: [{
        date: string,
        day: {
            avghumidity: number
        },
        astro: {
            sunrise: string,
            sunset: string
        },
        hour: hour[]
    }]
}

export interface hour {
    time: string,
    temp_c: number,
    feelslike_c: number,
    humidity: number,
    condition: {
        icon: string,
        text: string
    },
    chance_of_rain: number,
    cloud: number,
}