import React from 'react'
import { temperature } from '../context/MyContect'
import axios from 'axios'

import Link from "next/link";
export default function WeatherStatus(props: any) {
    const [Country, setCountry] = React.useState('')


    const { tempValues }: any = React.useContext(temperature);

    const { getSearch }: any = React.useContext(temperature);


    const weatherData = props.data[0]
    const title = props.title

    const [weatherDate, setWeatherDate] = React.useState("")


    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setCountry(data.country_name);
        }).catch((error) => {
            console.log(error);
        });
    };
    React.useEffect(() => {
        getGeoInfo();
    })
    React.useEffect(() => {

        let date = new Date(weatherData.applicable_date);
        let dates = (date.toLocaleString('en-US', {
            day: 'numeric',
            weekday: 'short',
            month: 'short',
        }))
        setWeatherDate(dates)
    }, [])
    return (
        <div className="weather-status">

            <header>
                <button className="btn btn-info text-white" onClick={() => getSearch(false)}>Seach for places</button>
                <span className="location-icon" >
                    <Link href='/city/[id]' as={`/city/${Country}`}>
                        <span className="material-icons material-icons-outlined" >
                            gps_fixed
                        </span>
                    </Link>

                </span>
            </header>
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
                            <>{(Math.round(weatherData.the_temp) * 9 / 5) + 32} <span className='text-dark'>&#176;F</span></>
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
                    <span>{weatherDate}</span>
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
