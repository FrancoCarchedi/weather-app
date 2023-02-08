import WeatherProvider from './context/WeatherProvider';
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import Forecast from './components/Forecast';
import CitySearch from './components/CitySearch';

export const WeatherApp = () => {

  return (
    <WeatherProvider>
      <div className="lg:flex self-center bg-background-800 text-white-200">
        <CurrentWeatherContainer />
        <CitySearch />
        <Forecast />
      </div>
    </WeatherProvider>
  )
}