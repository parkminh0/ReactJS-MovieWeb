import {useState, useEffect} from "react";
import Movie from '../components/Movie';

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
      ).json(); 
    setMovies(json.data.movies);
    setLoading(false);
    };

    useEffect(() => {
        getMovies()
    }, []);

    return (
        <div>
            {loading ? <span>Loading...</span>
            : (
                <div>
                    {movies.map((items) => (
                        <Movie 
                            coverImg={items.medium_cover_image}
                            id={items.id}
                            key={items.id}
                            title={items.title}
                            summary={items.summary}
                            genres={items.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    )
};

export default Home;