import { useState } from "react";
import { WeatherContext } from "./WeatherContext";

const WeatherProvider = () => {


  return (
    <WeatherContext.Provider value={{
      
    }}>
      {children}  
    </WeatherContext.Provider>
  )
}

