import { useState } from "react"

const MetricButton = ({unit="C°"}) => {
  const [units, setUnits] = useState(unit)
  const [first, setfirst] = useState()

  return (
    <button className="h-10 w-10 bg-white-300 drop-shadow-md rounded-full mx-1.5">{units}</button>
  )
}

export default MetricButton