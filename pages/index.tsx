import React from 'react'
import WeatherDetail from '../component/WeatherDetail';
import WeatherStatus from '../component/WeatherStatus';
import Default from '../layout/Default';
import { getData } from './api/data'

const Home = ({ data }) => {

  return (
    <Default>
      <div className="main">
        <WeatherStatus data={data.consolidated_weather} title={data.title} />
        <WeatherDetail data={data} />
      </div>
    </Default>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const data = await getData()
  return {
    props: {
      data
    }
  };
}
