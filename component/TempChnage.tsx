import React from 'react'
import { temperature } from '../context/MyContect'

export default function TempChnage() {

    const { setTempValues } = React.useContext(temperature);


    const [value, value2] = React.useState("cel")

    const onChangeValue = (event: any) => {
        setTempValues(event.target.value);
    }
    
    return (
        <div onChange={onChangeValue} className='temperature-toggle'>
            <label>
                <input type="radio" id="celcius" name="temperature" value="cel" defaultChecked />
                <span>&#176;C</span>
            </label>
            <label>
                <input type="radio" id="farenheit" name="temperature" value="far" />
                <span>&#176;F</span>
            </label>
        </div>
    )
}
