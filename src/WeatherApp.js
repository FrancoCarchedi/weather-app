import WeatherProvider from './context/WeatherProvider';
import { DaysContainer } from "./components/DaysContainer";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import HighlightsContainer from "./components/HighlightsContainer";
import UnitsButtons from './components/UnitsButtons';

export const WeatherApp = () => {

  return (
    <WeatherProvider>
      <div className="h-screen flex self-center bg-background-900 text-white-200">
        <div className="w-1/4">
          <CurrentWeatherContainer />
        </div>
        <div className="container w-3/4 px-40">
          <div className="flex justify-end mt-10">
            <UnitsButtons/>
          </div>
          <div className="mt-16">
            <DaysContainer />
          </div>
          <HighlightsContainer />
        </div>
      </div>
    </WeatherProvider>
  )
}