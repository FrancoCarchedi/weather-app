
const DayHighlights = () => {

    return (
      <div className="flex">
        <div className="justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200 py-5 px-28 bg-background-800">
          <p>Wind Status</p>
          <h1 className="text-5xl my-1.5">7<span className="text-2xl">mph</span></h1>
          <p>WSW</p>
        </div>
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">2</div>
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">3</div>
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">4</div>
      </div>
    )
}

export default DayHighlights