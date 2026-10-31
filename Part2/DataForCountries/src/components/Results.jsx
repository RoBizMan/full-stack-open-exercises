const Results = ({ countryToShow }) => {
    if (countryToShow.length > 10) {
        return <p>Too many matches, please be more specific</p>
    }

    if (countryToShow.length > 1 && countryToShow.length <= 10) {
        return (
            <ul>
                {countryToShow.map(country => (
                    <li key={country.name.common}>{country.name.common}</li>
                ))}
            </ul>
        )
    }

    if (countryToShow.length === 1) {
        const country = countryToShow[0]
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <h2>Languages:</h2>
                <ul>
                    {Object.values(country.languages).map(language => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
            </div>
        )
    }

    return null
}

export default Results