import { useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import SearchForm from '../components/SearchForm/SearchForm';
import PageControls from '../components/PageControls/PageControls';
import Card from '../components/Card/Card';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    function search(query) {
        console.log('Searching Movies for: ' + query);
        fetch(import.meta.env.VITE_BASE_URL + '&s=' + query + '&type=movie')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search);
                setTotalResults(data.totalResults);
            });
    }

    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">Search Movies:</h1>
                <SearchForm searchFunction={search} />
                <p className="text--body">{totalResults} movies found</p>
                <PageControls page={page} />
                <div className="results-container">
                    {movies.map((movie) => (
                        <Card key={movie.imdbID} item={movie} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Movies;
