import './Card.css';

function Card({ item }) {
    return (
        <div className="card">
            <h2 className="card__title">{item.Title}</h2>
            <h3 className="card__year">{item.Year}</h3>
            <img src={item.Poster} alt={item.Title} className="card__poster" />
        </div>
    );
}

export default Card;
