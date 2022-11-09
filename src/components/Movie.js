import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Movie.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={medium_cover_image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      {summary === "" ? <p>No Summary</p> : <p>{summary}</p>}
      <ul>
        {genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul>
      <hr />
    </div>
  );
}

export default Movie;
