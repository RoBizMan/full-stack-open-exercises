import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Artomis Hellanis',
            number: '040-1234567'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber
        }

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        else if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
            return
        }

        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
            {persons.map(person => (<li key={person.name}>{person.name} {person.number}</li>))}
            </ul>
        </div>
    )
}

export default App