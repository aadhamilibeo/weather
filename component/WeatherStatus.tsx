import React from 'react'
import { temperature } from '../context/MyContect'

export default function WeatherStatus(props: any) {
    const { tempValues } = React.useContext(temperature);


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

                <h2 className="temp">
                    {
                        tempValues == 'cel' ? <>{Math.round(weatherData.the_temp)} <span className='text-dark'>&#176;C</span></> :
                            <>{(Math.round(weatherData.the_temp) * 9/5) + 32} <span className='text-dark'>&#176;F</span></>
                    }
                </h2>
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
