import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/phonebook'

const Filter = ({ searchName, handleSearchChange }) => {
    return (
        <div>
            Filter shown with <input value={searchName} onChange={handleSearchChange} />
        </div>
    )
}

const PersonForm = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
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
    )
}

const Persons = ({ personsToShow }) => {
    return (
        <ul>
            {personsToShow.map(person => (<li key={person.id}>{person.name} {person.number}</li>))}
        </ul>
    )
}

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')

    const hook = () => {
        console.log('Effect')
        personService
            .getEverything()
            .then(initialPersons => {
                console.log('Promise fulfilled')
                setPersons(initialPersons)
            })
    }

    useEffect(hook, [])

    const addName = (event) => {
        event.preventDefault()
        const nameObject = {
            name: newName,
            number: newNumber,
        }

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        else if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
            return
        }

        personService
            .addPerson(nameObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
            })
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
            <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
            <h3>Add a new person:</h3>
            <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
            <h3>Numbers:</h3>
            <Persons personsToShow={personsToShow} />
        </div>
    )
}

export default App