import React from 'react'

export default function WeatherStatus(props: any) {

    const weatherData = props.data[0]
    const title = props.title
    const date = props.data[0].applicable_date.toString("MMMM yyyy")
    return (
        <div className="weather-status">
            <div className="state-abbr" >
                <div className='state-abbr-bg' style={{ backgroundImage: `url(/img/Cloud-background.png)` }}>
                </div>
                <img
                    src={`/img/${weatherData.weather_state_abbr}.png`} alt={weatherData.weather_state_name}
                />
            </div>
            <div className="state-temp">
                <h2 className="temp">{Math.round(weatherData.the_temp)} <span className='text-dark'>&#176;C</span></h2>
            </div>
            <div className="state-name">
                <h5 className="name text-dark fw-bold">{weatherData.weather_state_name} </h5>
            </div>
            <div className='text-dark'>
                <div className="date">
                    <span>Today</span>
                    <span className='dot'></span>
                    <span>{weatherData.applicable_date}</span>
                </div>
                <div className="location">
                    <span className="material-icons">
                        location_on
                    </span> <span>{title}</span>
                </div>
            </div>


        </div>
    )
}
