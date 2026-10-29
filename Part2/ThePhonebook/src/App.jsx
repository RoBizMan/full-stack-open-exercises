import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/phonebook'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchName, setSearchName] = useState('')
    const [messageStatus, setMessage] = useState(null)

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

        const nameExists = persons.find(person => person.name === newName)

        if (nameExists) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const changedPerson = { ...nameExists, number: newNumber }

                personService
                    .updatePerson(nameExists.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id === nameExists.id ? returnedPerson : person))
                        setNewName('')
                        setNewNumber('')
                        setMessage(`Updated ${returnedPerson.name}'s number`)
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    })
            }
            return
        }

        if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
            return
        }

        const nameObject = {
            name: newName,
            number: newNumber,
        }

        personService
            .addPerson(nameObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                setMessage(`Added ${returnedPerson.name}`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
    }

    const removeName = (id) => {
        personService
            .removePerson(id)
            .then(() => {
                setPersons(persons.filter(person => person.id !== id))
                setMessage(`Removed ${persons.find(person => person.id === id)?.name}`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
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
            <Notification message={messageStatus} />
            <Filter searchName={searchName} handleSearchChange={handleSearchChange} />
            <h3>Add a new person:</h3>
            <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
            <h3>Numbers:</h3>
            <Persons personsToShow={personsToShow} removeName={removeName} />
        </div>
    )
}

export default App