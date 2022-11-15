import { useState, useEffect } from "react";
import { DaysContainer } from "./components/DaysContainer";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import { getCurrentLocation } from "./helpers/getCurrentLocation";
import HighlightsContainer from "./components/HighlightsContainer";
import MetricButton from "./components/MetricButton";

export const WeatherApp = () => {

  const [location, setLocation] = useState([])

  useEffect(() => {
    getCurrentLocation().then( ubication => setLocation(ubication) )
  }, [])

  return (
    <div className="h-screen flex self-center bg-background-900 text-white-200">
      <div className="w-1/4">
        <CurrentWeatherContainer latitude={location[0]} longitude={location[1]}/>
      </div>
      <div className="container w-3/4 px-40">
        <div className="flex justify-end mt-10">
          <MetricButton/>
          <MetricButton/>
        </div>
        <div className="mt-16">
          <DaysContainer latitude={location[0]} longitude={location[1]}/>
        </div>
        <HighlightsContainer />
      </div>
    </div>
  )
}