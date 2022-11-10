import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Movie
          key={movie.id}
          id={movie.id}
          medium_cover_image={movie.medium_cover_image}
          title={movie.title}
          summary={
            movie.summary === undefined ? movie.description_full : movie.summary
          }
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
