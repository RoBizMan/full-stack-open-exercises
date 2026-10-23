import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {
            name: 'Artomis Hellanis',
            number: '040-1234567',
            id: 1
        },
        {
            name: 'Ada Lovelace',
            number: '39-44-5323523',
            id: 2
        },
        {
            name: 'Dan Abramov',
            number: '12-43-234345',
            id: 3
        },
        {
            name: 'Mary Poppendieck',
            number: '39-23-6423122',
            id: 4
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
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

    const handleSearchChange = (event) => {
        setSearchName(event.target.value)
    }

    const personsToShow = searchName === ''
        ? persons
        : persons.filter(person => person.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with <input value={searchName} onChange={handleSearchChange} />
            </div>
            <h2>Add a new person:</h2>
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
            <h2>Numbers:</h2>
            <ul>
            {personsToShow.map(person => (<li key={person.id}>{person.name} {person.number}</li>))}
            </ul>
        </div>
    )
}

export default App