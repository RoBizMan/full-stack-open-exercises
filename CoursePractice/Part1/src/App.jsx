const App = () => {
    const friends = [
        'Peter', 'Maya'
    ]
    return (
        <div>
            <p>{friends}</p>
        </div>
    )
}

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(15, 30)
console.log(result)

const t = [3, 6, 9]
const tSquared = t.map(p => p * p)
console.log(tSquared)

function product(a, b) {
    return a * b
}

const result2 = product(4, 8)
console.log(result2)

const average = function (a, b, c, d) {
    return (a + b + c + d) / 4
}

const result3 = average(4, 12, 15, 3)
console.log(result3)

export default App