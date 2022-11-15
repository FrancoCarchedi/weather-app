import { useWeather } from "../context/WeatherContext";
import { Day } from "./Day"
import dateFormatter from "../helpers/dateFormatter"
import firstLetterMayus from "../helpers/firstLetterMayus"

export const DaysContainer = () => {

  const weatherContext = useWeather()

  return (
    <div className="flex justify-between">
      { !weatherContext.forecast.loading?
      weatherContext.forecast.data.map( (w, index) => 
      index < 5 &&
      <Day key={w.dt} date={firstLetterMayus(dateFormatter(w.dt))} min_temp={Math.round(w.temp.min)} max_temp={Math.round(w.temp.max)} weather img={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}/> )
      :
      false
      }
    </div>
  )
}