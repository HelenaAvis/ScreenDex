import { useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import SearchForm from '../components/SearchForm/SearchForm';
import Card from '../components/Card/Card';

function Movies() {
    const [movies, setMovies] = useState([]);

    function search(query) {
        console.log('Searching Movies for: ' + query);
        fetch(import.meta.env.VITE_BASE_URL + '&s=' + query + '&type=movie')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search);
            });
    }

    return (
        <>
            <Header />
            <main className="main">
                <h1 className="text--heading">Search Movies:</h1>
                <SearchForm searchFunction={search} />
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
