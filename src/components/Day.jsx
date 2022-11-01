
export const Day = ({date, max_temp, min_temp, img}) => {
  return (
    <div className="px-4 text-slate-900 rounded flex flex-col justify-center items-center bg-gradient-to-t from-slate-200 via-slate-300 to-gray-400 shadow shadow-slate-500/30">
      <h1 className="font-medium text-base text-center my-4">{date}</h1>
      <img className="w-14 m-0" src={img} alt=""/>
      <div className="flex flex-row my-4">
        <p className="font-medium text-base mr-2">{max_temp + "° C"}</p>
        <p className="text-neutral-400 font-medium text-base ml-2">{min_temp + "° C"}</p>
      </div>
    </div>
  )
}