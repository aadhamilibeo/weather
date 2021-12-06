import React, { Children } from 'react'
import Head from 'next/head'
export default function Default(props: any) {
    return (
        <>
            <Head>
                <title>Weather App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800&family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            {props.children}
        </>
    )
}
