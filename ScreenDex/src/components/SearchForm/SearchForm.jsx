import { useState } from 'react';

import './SearchForm.css';

function SearchForm({ searchFunction }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            searchFunction(searchQuery);
        }
    }

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search Movies..."
                className="search__input"
                value={searchQuery}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <button className="search__button" onClick={() => searchFunction(searchQuery)}>
                Search
            </button>
        </div>
    );
}

export default SearchForm;
