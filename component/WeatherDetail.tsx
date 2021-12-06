import React from 'react'
import TempChnage from './TempChnage'
import { temperature } from '../context/MyContect'

export default function WeatherDetail(props: any) {
    const weatherData = props.data
    const today = props.data.consolidated_weather[0]
    const { tempValues } = React.useContext(temperature);
    
    return (
        <div className='weather-detail-container'>
            <div className="weather-detail">
                <TempChnage />
                <div className="weather-box ">
                    {
                        weatherData.consolidated_weather.slice(1, 6).map((item: any, index: number) => (
                            <div className="weather-inner text-center" key={index}>
                                <div className="box">
                                    <div className="box-date">
                                        <span>{item.applicable_date}</span>
                                    </div>
                                    <div className="box-icon">
                                        <img
                                            src={`/img/${item.weather_state_abbr}.png`} alt={item.weather_state_name}
                                            width="50" height="50" />
                                    </div>
                                    <div className="box-temp">
                                        <span>
                                            {
                                                tempValues == 'cel' ?
                                                    <>
                                                        {Math.round(item.max_temp)}
                                                        <span className='temp-icon'>&#176;C</span>
                                                    </> :
                                                    <>
                                                        {(Math.round(item.max_temp) * 9 / 5) + 32}
                                                        <span className='temp-icon'>&#176;F</span>
                                                    </>
                                            }
                                        </span>
                                        <span className='text-dark'>
                                            {
                                                tempValues == 'cel' ?
                                                    <>
                                                        {Math.round(item.min_temp)}
                                                        <span className='temp-icon'>&#176;C</span>
                                                    </> :
                                                    <>
                                                        {(Math.round(item.min_temp) * 9 / 5) + 32}
                                                        <span className='temp-icon'>&#176;F</span>
                                                    </>
                                            }
                                        </span>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div className="weather-hightlights ">
                    <h3 className="title">Today's Hightlights</h3>
                    <div className="highlights">
                        <div className="highlights-box text-center">
                            <p>Wind Status</p>
                            <span className="value">{Math.round(today.wind_speed)}
                                <span>mph</span>
                            </span>
                            <span className="icon d-block mt-2">
                                <span className="material-icons">
                                    near_me
                                </span>
                                <span>WSW</span>
                            </span>
                        </div>
                        <div className="highlights-box text-center">
                            <p>Humidity</p>
                            <span className="value">{Math.round(today.humidity)}
                                <span>%</span>
                            </span>
                            <div className='progress-container mt-3'>
                                <div className='progress-scale'>
                                    <span>0</span>
                                    <span>50</span>
                                    <span>100</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: Math.round(today.humidity) + "%" }} aria-valuenow={Math.round(today.humidity)} aria-valuemin="0" aria-valuemax="100">

                                    </div>
                                </div>
                                <div className='progress-scale bottom'>
                                    <span>%</span>
                                </div>
                            </div>
                        </div>
                        <div className="highlights-box text-center">
                            <p>Visibility</p>
                            <span className="value">{Math.round(today.visibility)}
                                <span>miles</span>
                            </span>
                        </div>
                        <div className="highlights-box text-center">
                            <p>Air Pressure</p>
                            <span className="value">{today.air_pressure}
                                <span>mb</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer text-center py-3">
                <p className="mb-0 text-dark">Created by <a href="http://" className='fw-bold'>Aria Adhami</a> - devchallenges.io </p>
            </div>
        </div>
    )
}
