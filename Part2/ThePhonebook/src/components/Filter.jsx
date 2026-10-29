const Filter = ({ searchName, handleSearchChange }) => {
    return (
        <div>
            Filter shown with <input value={searchName} onChange={handleSearchChange} />
        </div>
    )
}

export default Filter