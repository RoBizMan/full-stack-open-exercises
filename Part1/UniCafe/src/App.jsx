import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
    return (
        <div>
            <p>
                {props.text} {props.value}
            </p>
        </div>
    )
}

const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    const average = total === 0 ? 0 : (props.good - props.bad) / total
    const positive = total === 0 ? 0 : (props.good / total) * 100

    if (total === 0) {
        return (
            <div>
                <h1>
                    Statistics
                </h1>
                <p>
                    No feedback given.
                </p>
            </div>
        )
    }

    return (
        <div>
            <h1>
                Statistics
            </h1>
            <StatisticLine text="Good:" value={props.good} />
            <StatisticLine text="Neutral:" value={props.neutral} />
            <StatisticLine text="Bad:" value={props.bad} />
            <StatisticLine text="Overall:" value={total} />
            <StatisticLine text="Average:" value={average} />
            <StatisticLine text="Positive:" value={positive + '%'} />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const[bad, setBad] = useState(0)

    const clickGood = () => {
        setGood(good + 1)
    }

    const clickNeutral = () => {
        setNeutral(neutral + 1)
    }

    const clickBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>
                Give feedback
            </h1>
            <Button onClick={clickGood} text="Good" />
            <Button onClick={clickNeutral} text="Neutral" />
            <Button onClick={clickBad} text="Bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App