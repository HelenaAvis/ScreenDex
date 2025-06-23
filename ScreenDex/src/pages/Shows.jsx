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
        fetch(import.meta.env.VITE_BASE_URL + '&s=' + query + '&type=series')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setShows(data.Search);
            });
    }

    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">Search TV Shows:</h1>
                <SearchForm searchFunction={search} />
                <p className="text--body">{shows.length} shows found</p>
                <div className="results-container">
                    {shows.map((show) => (
                        <Card key={show.imdbID} item={show} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Shows;
