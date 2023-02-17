
export const Day = ({date="", max_temp="0", min_temp="0", units="°C", img}) => {
  return (
    <div className="rounded flex flex-col items-center bg-background-800">
      <h1 className="font-medium text-base text-center my-4">{date}</h1>
      <img className="h-16 m-0" src={img} alt=""/>
      <div className="flex flex-row my-4">
        <p className="font-medium text-base mr-2">{max_temp + units}</p>
        <p className="font-medium text-base ml-2 text-white-300">{min_temp + units}</p>
      </div>
    </div>
  )
}