import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import SearchForm from '../components/SearchForm/SearchForm';
import Card from '../components/Card/Card';

// Importing temporary movies data from a JSON file
import MoviesData from '../data/movies.json';

function Movies() {
    const movies = MoviesData.Search;

    return (
        <>
            <Header />
            <main className="main">
                <SearchForm />
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
