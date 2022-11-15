import { useWeather } from '../context/WeatherContext';

const UnitsButtons = () => {

  const weatherContext = useWeather()

  return (
    <>
    <button className={`h-10 w-10 font-bold drop-shadow-md rounded-full mx-1.5 ${weatherContext.units.unit === "metric" ? 'bg-white-100 text-background-900' : 'bg-white-600 text-white-200' }`} 
            disabled={weatherContext.units.unit === "metric"} 
            onClick={()=> weatherContext.unitsHandler()}>
              °C
    </button>
    <button className={`h-10 w-10 font-bold drop-shadow-md rounded-full mx-1.5 ${weatherContext.units.unit === "imperial" ? 'bg-white-100 text-background-900' : 'bg-white-600 text-white-200' }` }
            disabled={weatherContext.units.unit === "imperial"} 
            onClick={()=> weatherContext.unitsHandler()}>
              °F
    </button>
    </>
  )
}

export default UnitsButtons