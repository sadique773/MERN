import React, { useState } from 'react'
import "./mini.css"
import InfoBox from './infoBox';
import SearchBox from './SearchBox';

export default function Weatherapp() {
    let [weatherinfo,setweatherinfo] = useState(
        {
            city: "Bhopal",
            feelsLike: 34.38,
            humidity: 63,
            temp: 30.44,
            tempMax: 30.44,
            tempMin: 30.44,
            weather: "clear sky" 
        }
    )

    let updateInfo= (newinfo)=>{
        setweatherinfo(newinfo);
    };
    
  return (
    <div>
        <h1>Weather App by Sadique Hussain</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherinfo}></InfoBox>
    </div>
  )
}
