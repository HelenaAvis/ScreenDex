import { useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import SearchForm from '../components/SearchForm/SearchForm';
import Card from '../components/Card/Card';

import data from '../data/shows.json';

function Shows() {
    const [shows, setShows] = useState([]);

    function search(query) {
        console.log('Searching Shows for: ' + query);
    }

    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">Search TV Shows:</h1>
                <SearchForm searchFunction={search} />
                <p className="text--body">{data.Search.length} shows found</p>
                <div className="results-container">
                    {data.Search.map((show) => (
                        <Card key={show.imdbID} item={show} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Shows;
