import { useState, useEffect } from "react"
import axios from 'axios'
import { Day } from "./Day"
import dateFormatter from "../helpers/dateFormatter"
import firstLetterMayus from "../helpers/firstLetterMayus"

export const DaysContainer = ({latitude, longitude}) => {

  const [forecast, setForecast] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    if (latitude && longitude) {
      axios({
        method: 'get',
        // url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=3c7d1a58464a7ed2b7feb2bd435b00cd`
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=3c7d1a58464a7ed2b7feb2bd435b00cd&exclude=current,minutely,hourly`
      })
      .then( response => {
        setForecast({data: response.data.daily, loading: false});
      })
      .catch( err => {
        console.log(err)
      })
    }
  }, [latitude, longitude])
  

  return (
    <div className="grid grid-cols-8 gap-2">
      { !forecast.loading?
      forecast.data.map( (w) => 
      <Day key={w.dt} date={firstLetterMayus(dateFormatter(w.dt))} min_temp={Math.round(w.temp.min)} max_temp={Math.round(w.temp.max)} weather img={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`}/> )
      :
      <Day/> }
    </div>
  )
}