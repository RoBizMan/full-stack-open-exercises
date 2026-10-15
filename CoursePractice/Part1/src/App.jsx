import { useState } from 'react'

const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons.
            </div>
        )
    }
    return (
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        console.log('Left before', left)
        const updatedLeft = left + 1
        setLeft(updatedLeft)
        console.log('Left after', updatedLeft)
        setTotal(updatedLeft + right)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const updatedRight = right + 1
        setRight(updatedRight)
        setTotal(left + updatedRight)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text='Left' />
            <Button onClick={handleRightClick} text='Right' />
            {right}
            <History allClicks={allClicks} />
        </div>
    )
}

// const App = () => {
//     const [clicks, setClicks] = useState({
//         left: 0, right: 0
//     })

//     const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

//     const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })

//     return (
//         <div>
//             {clicks.left}
//             <button onClick={handleLeftClick}>Left</button>
//             <button onClick={handleRightClick}>Right</button>
//             {clicks.right}
//         </div>
//     )
// }

export default App