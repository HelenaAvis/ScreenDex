import Header from '../components/Header';
import Search from '../components/Search';
import MovieCard from '../components/MovieCard';

function Movies() {
    const movies = [
        { id: 1, title: 'The Matrix', poster: '../assets/react.svg' },
        { id: 2, title: 'The Terminator', poster: '../assets/react.svg' },
        { id: 3, title: 'Star Wars Episode 3', poster: '../assets/react.svg' }
    ];

    return (
        <div>
            <Header />
            <Search />
            <div className="movies-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;
