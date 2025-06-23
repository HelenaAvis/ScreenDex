import './Details.css';

function Details({ data }) {
    return (
        <div className="details">
            <img src={data.Poster} alt={data.Title} className="details__poster" />
            <div className="details__info">
                <h1 className="text--heading">{data.Title}</h1>
                <h2 className="text--subheading details__heading">Released: {data.Released}</h2>
                <h2 className="text--subheading details__heading">Genre: {data.Genre}</h2>
                <h2 className="text--subheading details__heading">
                    Ratings:{' '}
                    {data.Ratings.map((rating) => (
                        <p key={rating.Source} className="text--body">
                            {rating.Source}: {rating.Value}
                        </p>
                    ))}
                </h2>
                <h2 className="text--subheading details__heading">Age Rating: {data.Rated}</h2>
                <h2 className="text--subheading details__heading">Directed By: {data.Director}</h2>
                <h2 className="text--subheading details__heading">Written By: {data.Writer}</h2>
                <h2 className="text--subheading details__heading">Starring: {data.Actors}</h2>
                <h2 className="text--subheading details__heading">
                    Plot Summary:<p className="text--body">{data.Plot}</p>
                </h2>
            </div>
        </div>
    );
}

export default Details;
