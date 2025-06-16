import './SearchForm.css';

function SearchForm() {
    return (
        <div className="search">
            <button className="search__type-button">By Title</button>
            <input type="text" placeholder="Search Movies..." className="search__input" />
            <button className="search__submit-button">Search</button>
        </div>
    );
}

export default SearchForm;
