import { useWeather } from "../context/WeatherContext";
import DayHighlights from "./DayHighlights";

const HighlightsContainer = () => {

  const weatherContext = useWeather()

  return (
    <div className="">
      <h1 className="mb-5 text-2xl font-bold">Today's Highlights</h1>
      <DayHighlights/>
    </div>
  )
}

export default HighlightsContainer