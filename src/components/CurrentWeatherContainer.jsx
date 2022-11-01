import { useState, useEffect } from "react"
import axios from 'axios'
import CurrentWeather from "./CurrentWeather"

const CurrentWeatherContainer = ({latitude, longitude}) => {

  const [weather, setWeather] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    if (latitude && longitude) {
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3c7d1a58464a7ed2b7feb2bd435b00cd`
      })
      .then( response => {
        setWeather({data: response.data, loading: false})
      })
      .catch( err => {
        console.log(err)
      })
    }
  }, [latitude, longitude])

  return (
    !weather.loading?
    <CurrentWeather 
      temp={Math.round(weather.data.main.temp - 273.15) + " C°"} 
      weather={weather.data.weather[0].main} 
      city={weather.data.name}
      img={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@4x.png`}
    /> :
    <CurrentWeather 
      temp="Cargando" 
      weather="Cargando" 
      city="Cargando" 
    />
  )
}

export default CurrentWeatherContainer