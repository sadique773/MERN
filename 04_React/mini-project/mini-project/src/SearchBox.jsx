import React, { useState } from 'react'
import "./mini.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}) {
    let [city,setcity] = useState("");
    let [error,seterror] = useState(false)
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "023436237c6c8ce503846a8bc8f01b33";

    let getWeatherInfo = async()=>{
        try{
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
          let jsonresponse = await response.json();
          console.log(jsonresponse)
          let result ={
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax:jsonresponse.main.temp_max,
            humidity:jsonresponse.main.humidity,
            feelsLike:jsonresponse.main.feels_like,
            weather:jsonresponse.weather[0].description,
        };
        console.log(result)
        return result;
        }catch(err){
          throw err;
        }
    }

 
    

    let handleChange = (event)=>{
        setcity(event.target.value)
       
    }

    let handleSubmit = async (e)=>{
        try{
          console.log(city)
          setcity("");
          getWeatherInfo();
          let newinfo = await getWeatherInfo();
          updateInfo(newinfo) ;

        }catch(err){
          seterror(true)
        }
    }



  return (
    <div className='searchbox'>
       <TextField
          required
          id="city"
          label="City-Name"
          value={city}
          onChange={handleChange}
        />
        <Button 
        variant="contained" 
        type="submit"onClick={handleSubmit} >Search</Button>
    
        {error && <div className='Error'><p style={{color:"red"}}>No such place Exists in API</p></div>}
    </div>
  )
}
