import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'

const App = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios
            .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
            .then(response => {
                console.log('All countries fetched:', response.data)
                setCountries(response.data)
            })
    }, [])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleShow = (countryName) => {
        setSearchQuery(countryName)
    }

    const countryToShow = searchQuery === ''
        ? countries
        : countries.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <div>
            <Search searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
            <Results countryToShow={countryToShow} handleShow={handleShow} />
        </div>
    )
}

export default App