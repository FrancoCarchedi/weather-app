
export const Day = ({date, max_temp, min_temp, img}) => {
  return (
    <div className="rounded flex flex-col justify-center items-center bg-background-800 px-5">
      <h1 className="font-medium text-base text-center my-4">{date}</h1>
      <img className="w-14 m-0" src={img} alt=""/>
      <div className="flex flex-row my-4">
        <p className="font-medium text-base mr-2">{max_temp + "° C"}</p>
        <p className="font-medium text-base ml-2 text-white-300">{min_temp + "° C"}</p>
      </div>
    </div>
  )
}