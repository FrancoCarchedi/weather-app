import { useWeather } from "../context/WeatherContext";
import { Day } from "./Day";
import dateFormatter from "../helpers/dateFormatter";
import firstLetterMayus from "../helpers/firstLetterMayus";

export const DaysContainer = () => {

  const weatherContext = useWeather()

  return (
    <div className="grid grid-cols-2 place-content-center md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8 md:gap-2 lg:gap-4 px-8 lg:px-0">
      { !weatherContext.forecast.loading?
      weatherContext.forecast.data.map( (w, index) => 
      index < 5 &&
      <Day 
          key={w.dt} 
          date={firstLetterMayus(dateFormatter(w.dt))} 
          min_temp={Math.round(w.temp.min)} 
          max_temp={Math.round(w.temp.max)} 
          units={weatherContext.units.symbol} 
          img={`../assets/${w.weather[0].icon}.png`}
      /> )
      :
      false
      }
    </div>
  )
}