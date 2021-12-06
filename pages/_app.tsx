
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import React from 'react'
import { temperature } from '../context/MyContect'




function MyApp({ Component, pageProps }: AppProps) {

  const [tempValues, setTempValues] = React.useState("cel")

  const value = { tempValues, setTempValues };
  return (
    <temperature.Provider value={{tempValues, setTempValues}}>
      <Component {...pageProps} />
    </temperature.Provider>
  )

}

export default MyApp