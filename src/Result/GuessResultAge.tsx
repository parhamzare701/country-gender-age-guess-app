import React from 'react'
import { AgeResponseData } from '../types'
const GuessResultAge = ({ name, age, count } : AgeResponseData) => {
  return (
    <section className="guess__result__age">
      <span className="guess__result__age__title">Age</span>
      <div className="guess__result__age__name">
        <span className="guess__result__age__name__text">Name: <span className="guess__result__age__name__answer">{name}</span></span>
      </div>
      <div className="guess__result__age__lifetime">
        <span className="guess__result__age__lifetime__text">Age: <span className="guess__result__age__lifetime__answer">{age}</span></span>
      </div>
      <div className="guess__result__age__count">
        <span className="guess__result__age__count__text">Count: <span className="guess__result__age__count__answer">{count}</span></span>
      </div>
    </section>
  )
}

export default GuessResultAge