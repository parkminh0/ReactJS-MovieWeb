import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Movie;