import { useRef, useState } from "react"
import GuessResult from "./GuessResult";
import { AgeResponseData, CountryResponseData, GenderResponseData } from "./types";
const App = () => {
  // main code
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [usernameCheck, setUsernameCheck] = useState<string>("")
  const [data, setData] = useState<{ age: AgeResponseData, country: CountryResponseData, gender: GenderResponseData }>();
  const abortController = useRef<AbortController>(new AbortController())
  const getSearchResult =
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        if (userInput?.trim().toLowerCase() !== usernameCheck.trim().toLowerCase()) {
          setUsernameCheck(userInput!);
          setLoading(true);
          if (loading === true) {
            cancelRequest()
          }
          const endPoints = [
            `https://api.agify.io/?name=${userInput?.trim().toLowerCase()}`,
            `https://api.nationalize.io/?name=${userInput?.trim().toLowerCase()}`,
            `https://api.genderize.io/?name=${userInput?.trim().toLowerCase()}`] as const
          abortController.current = new AbortController();
          const [age, country, gender] = await Promise.all(endPoints.map(async (endPoint) => {
            const response = await fetch(endPoint, {
              signal: abortController.current.signal
            })
            return response.json();
          }))
          setData({ age, country, gender });
          setLoading(false);
        }
      }
      catch (error) {
        setUserInput("")
      }
    }
  const cancelRequest = () => abortController.current && abortController.current.abort()
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