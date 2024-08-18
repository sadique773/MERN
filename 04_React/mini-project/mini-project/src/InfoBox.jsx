import React from 'react'
import "./mini.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function InfoBox({info}) {

    const img = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4="
    
  return (
    <div className='infoBox'>
        <h2>Weather-{info.weather}</h2>
        <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Feels Like: {info.feelsLike}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>Max temp: {info.tempMax}&deg;C </p>
          <p>Min temp: {info.tempMin}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

