import { useState } from 'react'

const Display = ({ counter}) => <div>{counter}</div>

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [ counter, setCounter ] = useState(0)
    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const resetToZero = () => setCounter(0)

    return (
        <div>
            <Display counter={counter}/>
            <Button onClick={increaseByOne} text='Add' />
            <Button onClick={decreaseByOne} text='Minus' />
            <Button onClick={resetToZero} text='Reset' />
        </div>
    )
}

export default App