import CityWeather from './CityWeather'

const Results = ({ countryToShow, handleShow }) => {
    if (countryToShow.length > 10) {
        return <p>Too many matches, please be more specific</p>
    }

    if (countryToShow.length > 1 && countryToShow.length <= 10) {
        return (
            <ul>
                {countryToShow.map(country => (
                    <li key={country.name.common}>
                        {country.name.common} {' '}
                        <button onClick={() => handleShow(country.name.common)}>Show</button>
                        </li>
                ))}
            </ul>
        )
    }

    if (countryToShow.length === 1) {
        return <CityWeather country={countryToShow[0]} />
    }

    return null
}

export default Results