import { DayHighlights } from "./DayHighlights"

const HighlightsContainer = ({}) => {
  return (
    <div className="flex flex-col text-slate-100">
      <h1 className="mb-5 text-2xl font-bold">Today's Highlights</h1>
      <DayHighlights/>
    </div>
  )
}

export default HighlightsContainer