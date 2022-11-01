import { useState, useEffect } from "react";
import { DaysContainer } from "./components/DaysContainer";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import { getCurrentLocation } from "./helpers/getCurrentLocation";
import HighlightsContainer from "./components/HighlightsContainer";

export const WeatherApp = () => {

  const [location, setLocation] = useState([])

  useEffect(() => {
    getCurrentLocation().then( ubication => setLocation(ubication) )
  }, [])

  return (
    <div className="w-screen h-screen p-10 flex bg-gradient-to-t from-slate-800 to-slate-900">
      <CurrentWeatherContainer latitude={location[0]} longitude={location[1]}/>
      <div className="w-9/12 flex flex-col">
        <DaysContainer latitude={location[0]} longitude={location[1]}/>
        <HighlightsContainer />
      </div>
    </div>
  )
}