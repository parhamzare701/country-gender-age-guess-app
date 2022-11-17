interface GuessResultCountryProps {
  probability: number
  countryId : string
}
const GuessResultCountry = ({ probability, countryId }: GuessResultCountryProps) => {
  return (
      <div className='guess__result__country__item'><span className='guess__result__country__item__country'>{countryId}</span> : {Math.floor(probability * 100)}%</div>
  )
}

export default GuessResultCountry