import { useState } from 'react';

import './SearchForm.css';

function SearchForm({ searchQuery, setSearchQuery, searchFunction }) {
    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    function handleKeyPress(event) {
        if (event.key === 'Enter' && searchQuery.trim() !== '') {
            searchFunction();
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
            <button className="search__button" onClick={() => searchFunction()} disabled={searchQuery.trim() === ''}>
                Search
            </button>
        </div>
    );
}

export default SearchForm;
