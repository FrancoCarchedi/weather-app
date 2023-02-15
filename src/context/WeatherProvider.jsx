import { useState, useEffect } from "react";
import { WeatherContext } from "./WeatherContext";
import axios from 'axios';
import { getCurrentLocation } from "../helpers/getCurrentLocation";

const WeatherProvider = ({children}) => {

  //Location
  const [location, setLocation] = useState({
    latitude: "",
    longitude: ""
  })

  //Cities
  const [cities, setCities] = useState([])

  //Units for handle Celsius or Farenheit
  const [units, setUnits] = useState({
    unit: "metric",
    symbol: "°C"
  })

  //Weather data
  const [weather, setWeather] = useState({
    data: [],
    loading: true
  })

  //Forecast Data
  const [forecast, setForecast] = useState({
    data: new Array(5),
    loading: true
  })

  //Sidebar state handler
  const [isOpen, setIsOpen] = useState(false)

  const handleCurrentLocation = () => {
    getCurrentLocation().then( ubication => setLocation({latitude: ubication[0], longitude: ubication[1]}) )
  }

  //Get location at load page
  useEffect(() => {
    handleCurrentLocation();
  }, [])

  //Set location
  const handleLocation = (lat, long) => {
    setLocation({latitude:lat, longitude:long})
  }

  

  //Data fetching of Weather
  useEffect(() => {
    if (location.latitude && location.longitude !== "")
    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=${units.unit}&appid=${process.env.REACT_APP_APIKEY}`
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
        apikey: process.env.REACT_APP_APIKEY,
        url: `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=${units.unit}&appid=${process.env.REACT_APP_APIKEY}&exclude=current,minutely,hourly`
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

  const citySearch = (cityName) => {
    axios({
      method: 'get',
      apikey: process.env.REACT_APP_APIKEY,
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${process.env.REACT_APP_APIKEY}`
    })
    .then( response => {
      setCities(response.data);
    })
    .catch( err => {
      console.log(err)
    })
  }

  return (
    <WeatherContext.Provider value={{ weather, forecast, units, unitsHandler, cities, citySearch, handleLocation, isOpen, setIsOpen, handleCurrentLocation }}>
      { children }  
    </WeatherContext.Provider>
  )
}

export default WeatherProvider;