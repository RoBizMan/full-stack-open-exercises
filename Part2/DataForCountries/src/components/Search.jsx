const Search = ({ searchQuery, handleSearchChange }) => {
    return (
        <div>
            Find countries: <input value={searchQuery} onChange={handleSearchChange} />
        </div>
    )
}

export default Search