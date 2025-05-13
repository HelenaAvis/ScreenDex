function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <h3 className="movie-card__title">{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} className="movie-card__poster" />
        </div>
    );
}

export default MovieCard;
