import { useWeather } from "../context/WeatherContext";
import degToCompass from "../helpers/degToCompass";
import DayHighlights from "./DayHighlights";

const HighlightsContainer = () => {

  const weatherContext = useWeather()

  return (
    !weatherContext.weather.loading?
    <DayHighlights 
      windSpeed={weatherContext.weather.data.wind.speed}
      windUnit={weatherContext.units.unit === "metric"? "m/s" : "mph"}
      windDir={weatherContext.weather.data.wind.deg}
      windDeg={degToCompass(weatherContext.weather.data.wind.deg)}
      pressure={weatherContext.weather.data.main.pressure}
      visibility={weatherContext.weather.data.visibility}
      humidity={weatherContext.weather.data.main.humidity}
    /> :
    false
  )
}

export default HighlightsContainer