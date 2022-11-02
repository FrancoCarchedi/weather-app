import { getDate } from "../helpers/getDate";

const CurrentWeather = ({temp, weather, city, img}) => {

  return (
    <div className="w-1/3 h-full bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col justify-evenly self-center rounded-lg mx-5 text-slate-800 shadow shadow-slate-500/30">
      {/* <div className="flex flex-row justify-around">
        <a className="py-2 px-4 bg-slate-500 text-stone-200 place-self-center font-medium text-base drop-shadow-md rounded" href="#a">Search for places</a>
        <i className="bx bx-sm bx-current-location bg-slate-500 text-stone-200 p-2.5 drop-shadow-md rounded-full"></i>
      </div> */}
      <div className="flex flex-row justify-center space-x-2 text-xl">
        <i className="bx bxs-map self-center"></i>
        <p>{city}</p>
      </div>
      <img className="w-40 self-center" src={img} alt=""/>
      <h1 className=" text-5xl font-medium text-center">{temp}</h1>
      <h2 className=" text-4xl font-bold text-center">{weather}</h2>
      <div className="flex flex-row justify-center">
        <p className="">Today</p>
        <p className=" mx-4">·</p>
        <p className="">{getDate()}</p>
      </div>
      
    </div>
  )
}

export default CurrentWeather