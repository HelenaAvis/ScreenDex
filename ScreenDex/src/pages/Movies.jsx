import { useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import SearchForm from '../components/SearchForm/SearchForm';
import Card from '../components/Card/Card';

function Movies() {
    const baseURL = 'https://www.omdbapi.com/?apikey=';
    const [movies, setMovies] = useState([]);

    function search(query) {
        console.log('Searching Movies for: ' + query);
        console.log(baseURL + import.meta.env.VITE_API_KEY + '&s=' + query + '&type=movie');
        fetch(baseURL + import.meta.env.VITE_API_KEY + '&s=' + query + '&type=movie')
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
                <SearchForm searchFunction={search} />
                <div className="movies-container">
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
