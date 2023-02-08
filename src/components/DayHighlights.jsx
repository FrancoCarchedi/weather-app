
const DayHighlights = ({ windSpeed, windUnit, windDeg, windDir, pressure, visibility, humidity }) => {

  return (
    <div className="mt-10 px-8 lg:px-0">
      <h1 className="mb-5 text-2xl font-bold">Today's Highlights</h1>
    
      {/* Aca mandarle grid, no columns */}
      <div className="columns-1 lg:columns-2 gap-12 space-y-12 font-medium">
        <div className="justify-evenly flex flex-col items-center rounded py-5 bg-background-800">
          <p>Wind Status</p>
          <h1 className="text-6xl font-bold mt-1.5">{windSpeed}<span className="text-2xl font-medium"> {windUnit}</span></h1>
          <div className="flex items-center gap-2 mt-4">
            {/* <i className="p-2 bx bxs-navigation align-middle bg-white-400 text-stone-200 drop-shadow-md rounded-full" style={{transform: `rotate(${windDir}deg)`}}></i> */}
            <span className="p-2 material-icons align-middle bg-white-400 text-stone-200 drop-shadow-md rounded-full" style={{transform: `rotate(${windDir}deg)`, fontSize: `1rem`}}>navigation</span>
            <p className="text-sm">{windDeg}</p>
          </div>
        </div>

        <div className="justify-evenly flex flex-col items-center rounded py-5 bg-background-800">
          <p>Visibility</p>
          <h1 className="text-6xl font-bold my-1.5">{Math.round(visibility/1.609)}<span className="text-2xl font-medium"> miles</span></h1>
        </div>

        <div className="justify-evenly flex flex-col items-center rounded py-5 bg-background-800">
          <p>Humidity</p>
          <h1 className="text-6xl font-bold mt-1.5">{humidity}<span className="text-2xl font-medium"> %</span></h1>
          <div className="flex flex-col items-center w-3/4 mt-3">

            <div className="flex w-full justify-between">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-white-200 rounded">
              <div className={`h-full bg-yellow-100`} style={{width: `${humidity}%`}}></div>
            </div>
          </div>
        </div>

        <div className="justify-evenly flex flex-col items-center rounded py-5 bg-background-800">
          <p>Air pressure</p>
          <h1 className="text-6xl font-bold my-1.5">{pressure}<span className="text-2xl font-medium"> mb</span></h1>
        </div>
      </div>
    </div>
  )
}

export default DayHighlights