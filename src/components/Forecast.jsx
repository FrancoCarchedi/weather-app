import { DaysContainer } from "./DaysContainer";
import HighlightsContainer from "./HighlightsContainer";
import UnitsButtons from './UnitsButtons';


const Forecast = () => {
  return (
    <div className="w-full bg-background-900 pt-10 lg:w-8/12 md:px-5 lg:px-10 xl:px-40 px-0">
      <div className="flex justify-center lg:justify-end">
        <UnitsButtons/>
      </div>
      <div className="mt-10">
        <DaysContainer />
      </div>
      <HighlightsContainer />
      <div className="text-center mt-20 pb-4">
        <p className="text-white-300 text-sm">created by <a href="https://github.com/FrancoCarchedi" target="_blank" rel="noreferrer" className="font-bold underline">Franco Carchedi</a> - devChallenges.io</p>
      </div>
    </div>
  )
}

export default Forecast