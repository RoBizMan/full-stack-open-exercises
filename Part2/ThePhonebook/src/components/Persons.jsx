const Persons = ({ personsToShow, removeName }) => {
    return (
        <ul>
            {personsToShow.map(person => (<li key={person.id}>
                {person.name} {person.number} {' '} <button onClick={() => {
                    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
                        removeName(person.id)
                    }
                }}>Delete</button></li>))}
        </ul>
    )
}

export default Persons