import { useWeather } from "../context/WeatherContext";
import CurrentWeather from "./CurrentWeather";

const CurrentWeatherContainer = () => {

  const weatherContext = useWeather()
  console.log(weatherContext)

  return (
    !weatherContext.weather.loading?
    <CurrentWeather 
      temp={Math.round(weatherContext.weather.data.main.temp)} 
      weather={weatherContext.weather.data.weather[0].main} 
      city={weatherContext.weather.data.name}
      img={`https://openweathermap.org/img/wn/${weatherContext.weather.data.weather[0].icon}@4x.png`}
      dt={weatherContext.weather.data.dt}
    /> :
    <CurrentWeather 
      temp="0" 
      weather="" 
      city="Locating..."
      dt=""
    />
  )
}

export default CurrentWeatherContainer