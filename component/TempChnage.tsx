import React from 'react'
import { temperature } from '../context/MyContect'

export default function TempChnage() {

    const tempValues = React.useContext(temperature);
    const setTempValues = React.useContext(temperature);


    const [value, value2] = React.useState("cel")

    const onChangeValue = (event: any) => {
        value2(event.target.value);
    }
    React.useEffect(() => {
        // setTempValues("value")
    })
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
