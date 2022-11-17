import { GenderItemData } from "../types"

const GuessResultGender = ({gender, probability} : GenderItemData) => {
    return (
        <section className="guess__result__gender">
            <span className="guess__result__gender__title">Gender</span>
            <div className="guess__result__gender__status">
                <span className="guess__result__gender__status__text">Gender: <span className="guess__result__gender__status__answer">{gender}</span></span>
            </div>
            <div className="guess__result__gender__probability">
                <span className="guess__result__gender__probability__text">Probability: <span className="guess__result__gender__probability__answer">{Math.floor(probability * 100)}%</span></span>
            </div>
        </section>
    )
}

export default GuessResultGender