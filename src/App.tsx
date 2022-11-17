import { useState } from "react"
import GuessResult from "./GuessResult";
import { CountryResponseData, GenderResponseData } from "./types"
const App = () => {
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ age: any, country: CountryResponseData, gender: GenderResponseData } | null>(null);
  const getSearchResult = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const endPoints = [
      `https://api.agify.io/?name=${userInput}`,
      `https://api.nationalize.io/?name=${userInput}`,
      `https://api.genderize.io/?name=${userInput}`] as const
    const [age, country, gender] = await Promise.all(endPoints.map(async (endPoint) => {
      const response = await fetch(endPoint)
      return response.json();
    }))
    setData({ age, country, gender });
    setLoading(false);
  }
  return (
    <form className='guess' onSubmit={getSearchResult}>
      <div className='guess__search'>
        <input className='guess__search__input' value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder='Type your name' />
        <button className='guess__search__btn'>{loading ? "Searching..." : "Search"}</button>
      </div>
      <div className="guess__result">
        {data && <GuessResult ageData={data.age} countryData={data.country} genderData={data.gender} />}
      </div>
    </form>
  )
}

export default App