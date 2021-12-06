import React from 'react'
import SearchForm from '../component/SearchForm';
import WeatherDetail from '../component/WeatherDetail';
import WeatherStatus from '../component/WeatherStatus';
import Default from '../layout/Default';
import { getData } from './api/data'

import { temperature } from '../context/MyContect'

const Home = ({ data }: any) => {

  const { search }: any = React.useContext(temperature);


  return (
    <Default>

      {console.log(data)}
      <div className="main">
        {search ? <WeatherStatus data={data.consolidated_weather} title={data.title} /> :
          <SearchForm />}
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
