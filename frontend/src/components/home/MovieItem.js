import { useNavigate } from "react-router-dom";

const MovieItem = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();

  const handleTrailerClick = (e) => {
    e.preventDefault();
    window.open(movie.trailerUrl, "_blank");
  };

  const handleEditClick = (e) => {
    navigate("/addMovie", { replace: false, state: movie });
  };

  const handleDeleteClick = async (e) => {
    const response = await fetch(`/api/deleteMovie/${movie._id}`, {
      method: "DEL",
    });

    const json = await response.json();

    if (!response.ok) {
      alert(json);
    }
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div className="movie-item">
      <div className="movie-desc">
        <h4>{movie.name}</h4>
        <p>
          <strong>Plot: </strong>
          <label className="plot">{movie.description}</label>
        </p>
        <p>
          <strong>Release year: </strong>
          <label className="plot">{movie.yearOfRelease}</label>
        </p>
        <p>
          <strong>Rating: </strong>
          <label className="plot">{movie.rating}</label>
        </p>
        <p>
          <ul>Genre: </ul>
          {movie.genre.map((g) => (
            <li className="genre" key={g}>
              {g}
            </li>
          ))}
        </p>

        <div className="button-container">
          <button onClick={handleTrailerClick}>Watch trailer</button>
          <button onClick={handleEditClick} className="edit-button">
            Edit Movie
          </button>
          <button onClick={handleDeleteClick} className="delete-button">
            Delete Movie
          </button>
        </div>
      </div>
      <div className="movie-poster">
        <img src={movie.posterUrl} alt="Movie Poster"></img>
      </div>
    </div>
  );
};

export default MovieItem;
