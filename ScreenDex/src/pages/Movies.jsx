import Header from '../components/Header/Header';
import Footer from '../components/Footer';

import Search from '../components/Search';
import MovieCard from '../components/MovieCard';

function Movies() {
    const movies = [
        { id: 1, title: 'The Matrix', poster: '../assets/react.svg' },
        { id: 2, title: 'The Terminator', poster: '../assets/react.svg' },
        { id: 3, title: 'Star Wars Episode 1', poster: '../assets/react.svg' },
        { id: 4, title: 'Star Wars Episode 2', poster: '../assets/react.svg' },
        { id: 5, title: 'Star Wars Episode 3', poster: '../assets/react.svg' },
        { id: 6, title: 'Star Wars Episode 4', poster: '../assets/react.svg' },
        { id: 7, title: 'Star Wars Episode 5', poster: '../assets/react.svg' },
        { id: 8, title: 'Star Wars Episode 6', poster: '../assets/react.svg' }
    ];

    return (
        <>
            <Header />
            <main className="main">
                <Search />
                <div className="movies-container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Movies;
