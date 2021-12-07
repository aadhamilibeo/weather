

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import React from 'react'
import { temperature, IProviderProps } from '../context/MyContect'

function MyApp({ Component, pageProps },IProviderProps) {

  const [tempValues, setTempValues] = React.useState("cel")
  const [search, getSearch] = React.useState(true);
  
  const value = { tempValues, setTempValues, search, getSearch };
  return (
    <temperature.Provider value={value}>
      <Component {...pageProps} />
    </temperature.Provider>
  )

}

export default MyApp
