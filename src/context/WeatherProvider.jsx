import { useState, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";
import axios from 'axios';
import { getCurrentLocation } from "../helpers/getCurrentLocation";

const WeatherProvider = ({children}) => {

  const [location, setLocation] = useState({
    latitude: "",
    longitude: ""
  })

  const [units, setUnits] = useState({
    unit: "metric",
    symbol: "°C"
  })

  const [weather, setWeather] = useState({
    data: [],
    loading: true
  })

  const [forecast, setForecast] = useState({
    data: new Array(5),
    loading: true
  })

  //Obtener localización
  useEffect(() => {
    getCurrentLocation().then( ubication => setLocation({latitude: ubication[0], longitude: ubication[1]}) )
  }, [])

  //Data fetching de Weather
  useEffect(() => {
    if (location.latitude && location.longitude !== "")
    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=${units.unit}&appid=3c7d1a58464a7ed2b7feb2bd435b00cd`
    })
    .then( response => {
      setWeather({data: response.data, loading: false})
    })
    .catch( err => {
      console.log(err)
    })
  }, [location, units])

  //Data fetching de Forecast
  useEffect(() => {
    if (location.latitude && location.longitude !== "") {
      axios({
        method: 'get',
        // url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=3c7d1a58464a7ed2b7feb2bd435b00cd`
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=${units.unit}&appid=3c7d1a58464a7ed2b7feb2bd435b00cd&exclude=current,minutely,hourly`
      })
      .then( response => {
        setForecast({data: response.data.daily, loading: false});
      })
      .catch( err => {
        console.log(err)
      })
    }
  }, [location, units])

  const unitsHandler = () => {
    if (units.unit === "metric") {
      setUnits({unit: "imperial", symbol: "°F"})
    }
    else {
      setUnits({unit: "metric", symbol: "°C"})
    }
  }

  return (
    <WeatherContext.Provider value={{ weather, forecast, units, unitsHandler }}>
      { children }  
    </WeatherContext.Provider>
  )
}

export default WeatherProvider;