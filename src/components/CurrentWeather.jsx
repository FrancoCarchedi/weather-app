import dateFormatter from "../helpers/dateFormatter";

const CurrentWeather = ({temp, weather, city, units, img, dt}) => {

  return (
    <div className="h-full flex flex-col justify-between self-center shadow shadow-slate-500/30 text-white-200 bg-background-800 text-center py-10">
      <div className="flex flex-row justify-around">
        <button className="py-2 px-4 bg-white-400 hover:bg-white-500 text-stone-200 place-self-center font-medium text-base drop-shadow-md rounded" href="#a">Search for places</button>
        <button className="w-10 h-10">
          <i className="p-2 bx bx-sm bx-current-location bg-white-400 hover:bg-white-500 text-stone-200 drop-shadow-md rounded-full"></i>
        </button>
      </div>
      <img className="w-40 self-center" src={img} alt=""/>
      <span className="text-8xl font-medium">{temp}<span className="text-4xl text-white-300">{units}</span></span>
      <h2 className="text-4xl font-bold text-white-300">{weather}</h2>
      <div className="flex flex-row justify-center text-white-300">
        <p className="">Today</p>
        <p className="mx-4">·</p>
        <p className="">{dateFormatter(dt)}</p>
      </div>
      <div className="flex flex-row justify-center space-x-2 text-white-300">
        <i className="bx bxs-map self-center"></i>
        <p>{city}</p>
      </div>
    </div>
  )
}

export default CurrentWeather