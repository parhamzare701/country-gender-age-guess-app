import GuessResultCountry from "./Result/CountryResultItem"
import GuessResultAge from "./Result/GuessResultAge"
import GuessResultGender from "./Result/GuessResultGender"
import { AgeResponseData, CountryResponseData, GenderResponseData } from "./types"

interface GuessResultProps {
  ageData: AgeResponseData,
  countryData: CountryResponseData,
  genderData: GenderResponseData,
}
const GuessResult = ({ ageData, countryData, genderData }: GuessResultProps) => {
  return (
    <>
        <GuessResultAge age={ageData.age} count={ageData.count} name={ageData.name} />
        <GuessResultGender gender={genderData.gender} probability={genderData.probability} />
      <div className='guess__result__country'>
        <span className="guess__result__country__title">country</span>
        {countryData.country.map((data) => <GuessResultCountry key={data.country_id} countryId={data.country_id} probability={data.probability} />)}
      </div>
    </>
  )
}

export default GuessResult