import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async() => {
        const json = await ( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>{loading ? <h1>"Loading..."</h1> : (
            <div>
                <img src={movie.medium_cover_image} alt={movie.id}/>
                <h3>{movie.title} ({movie.year})</h3>
                <hr/>
                <h4>Runtime: {movie.runtime} min</h4>
                <h4>Rating: {movie.rating}/10</h4>
                <h4>Genre</h4>
                {movie.genres.map((items) => (
                    <li>{items}</li>
                ))}
            </div>
        )}
        </div>
    );
};

export default Detail;