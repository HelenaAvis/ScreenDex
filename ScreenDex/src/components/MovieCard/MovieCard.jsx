import './MovieCard.css';
import placeholder from '../../assets/placeholder.svg';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <h3 className="movie-card__title">{movie.title}</h3>
            <img src={placeholder} alt={movie.title} className="movie-card__poster" />
        </div>
    );
}

export default MovieCard;
