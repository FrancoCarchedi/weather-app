import { useState } from 'react';
import { useWeather } from '../context/WeatherContext';

const CitySearch = () => {

  const weatherContext = useWeather()

  const [searchValue, setSearchValue] = useState()

  const handleInputSearch = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className={`${weatherContext.isOpen? "absolute" : "hidden"} transition-all duration-500 ease-in-out left-0 top-0 bg-background-800 w-full lg:w-4/12 h-screen p-4`} style={{ transform: weatherContext.isOpen ? "translateX(0)" : "translateX(-100%)" }}>
      <div className="flex flex-col">
        <button className="my-4 mr-12 place-self-end" onClick={() => weatherContext.setIsOpen(false)}>
          <span className="material-icons">close</span>
        </button>

        <div className="flex gap-4 justify-center m-12">
          <input type="text" name="city" id="" placeholder="Search location" onChange={handleInputSearch} className="bg-transparent border p-3.5 w-full"/>
          <button className="bg-tahiti py-2 px-4" onClick={() => weatherContext.citySearch(searchValue)}>Search</button>
        </div>

        <div className="flex flex-col m-12 gap-4">
        {weatherContext.cities.map( (c, index) => 
          <button key={index} onClick={() => {weatherContext.handleLocation(c.lat, c.lon); weatherContext.setIsOpen(false)}} className="bg-transparent border p-3.5 hover:text-white-600">
            <div className="flex justify-between">
              <span className="text-white-100">{c.name}, {c.state} {c.country}</span>
              <span className="material-icons">keyboard_arrow_right</span>
            </div>
          </button>
        )}
        </div>
      </div>    
    </div>
  )
}

export default CitySearch