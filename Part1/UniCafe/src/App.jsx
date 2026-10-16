import { useState } from 'react'

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
            <p>
                Good: {props.good}
            </p>
            <p>
                Neutral: {props.neutral}
            </p>
            <p>
                Bad: {props.bad}
            </p>
            <p>
                Overall: {total}
            </p>
            <p>
                Average: {average}
            </p>
            <p>
                Positive: {positive}%
            </p>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const[bad, setBad] = useState(0)

    return (
        <div>
            <h1>
                Give feedback
            </h1>
            <button onClick={() => setGood(good + 1)}>
                Good
            </button>
            <button onClick={() => setNeutral(neutral + 1)}>
                Neutral
            </button>
            <button onClick={() => setBad(bad + 1)}>
                Bad
            </button>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App