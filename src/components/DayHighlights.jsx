
export const DayHighlights = () => {

    return (
      <div className="grid grid-cols-2 grid-rows-2 row-span-3 gap-5">
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">
          <p>Wind Status</p>
          <h1 className="text-4xl">7 mph</h1>
          <p>WSW</p>
        </div>
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">2</div>
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">3</div>
        <div className="h-2/4 justify-evenly flex flex-col items-center bg-slate-800 rounded text-stone-200">4</div>
      </div>
    )
}