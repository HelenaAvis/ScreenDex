import './SearchForm.css';

function SearchForm() {
    return (
        <div className="search">
            <button className="search__button">By Title</button>
            <input type="text" placeholder="Search Movies..." className="search__input" />
            <button className="search__button">Search</button>
        </div>
    );
}

export default SearchForm;
