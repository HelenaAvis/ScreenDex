import './Search.css';

function Search() {
    return (
        <div className="search">
            <button className="search__type-button">By Title</button>
            <input type="text" placeholder="Search Movies..." className="search__input" />
        </div>
    );
}

export default Search;
