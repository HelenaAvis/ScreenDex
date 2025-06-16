import { useState } from 'react';

import './SearchForm.css';

function SearchForm() {
    const [searchType, setSearchType] = useState('Title');

    return (
        <div className="search">
            <button
                className="search__button"
                onClick={function handleClick() {
                    if (searchType === 'Title') {
                        setSearchType('ID');
                    } else {
                        setSearchType('Title');
                    }
                }}
            >
                By {searchType}
            </button>
            <input type="text" placeholder="Search Movies..." className="search__input" />
            <button className="search__button">Search</button>
        </div>
    );
}

export default SearchForm;
