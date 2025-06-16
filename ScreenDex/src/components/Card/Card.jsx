import { Link } from 'react-router-dom';

import './Card.css';

function Card({ item }) {
    return (
        <Link to={'/view/' + item.imdbID} className="card">
            <h2 className="card__title">{item.Title}</h2>
            <h3 className="card__year">{item.Year}</h3>
            <h3 className="card__id">IMDB ID - {item.imdbID}</h3>
            <img src={item.Poster} alt={item.Title} className="card__poster" />
        </Link>
    );
}

export default Card;
