import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length >= 10;
const isGenreSelected = (arr) => arr.length === 0;
const isValidImageUrl = (value) =>
  value.trim().endsWith(".jpg") ||
  value.trim().endsWith(".jpeg") ||
  value.trim().endsWith(".png");
const isValidYTTrailer = (value) => value.trim().includes("youtube");

const MovieForm = (props) => {
  const navigate = useNavigate();
  const movie = props.movie;

  const [genreInfo, setGenreInfo] = useState([]);

  const genres = [
    "Action",
    "Adventure",
    "Animated",
    "Comedy",
    "Crime",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Western",
  ];

  const years = [];
  for (let i = 1960; i < 2024; i++) {
    years.push(i);
  }

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    desc: true,
    genre: true,
    rating: true,
    poster: true,
    trailer: true,
  });

  const nameInputRef = useRef();
  const descInputRef = useRef();
  const yearInputRef = useRef();
  const ratingInputRef = useRef();
  const posterInputRef = useRef();
  const trailerInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredRating = ratingInputRef.current.value;
    const enteredPoster = posterInputRef.current.value;
    const enteredTrailer = trailerInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredDescIsValid = isTenChars(enteredDesc);
    const enteredGenreIsValid = !isGenreSelected(genreInfo);
    const enteredRatingIsValid = !isEmpty(enteredRating);
    const enteredPosterIsValid =
      isTenChars(enteredPoster) && isValidImageUrl(enteredPoster);
    const enteredTrailerIsValid =
      isTenChars(enteredTrailer) && isValidYTTrailer(enteredTrailer);

    setFormInputValidity({
      name: enteredNameIsValid,
      desc: enteredDescIsValid,
      genre: enteredGenreIsValid,
      rating: enteredRatingIsValid,
      poster: enteredPosterIsValid,
      trailer: enteredTrailerIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredDescIsValid &&
      enteredGenreIsValid &&
      enteredRatingIsValid &&
      enteredPosterIsValid &&
      enteredTrailerIsValid;

    if (!formIsValid) {
      return;
    }

    const enteredMovie = {
      name: enteredName,
      description: enteredDesc,
      yearOfRelease: enteredYear,
      genre: genreInfo,
      rating: enteredRating,
      posterUrl: enteredPoster,
      trailerUrl: enteredTrailer,
    };

    //Update Movie
    if (movie != null) {
      const response = await fetch(`/api/updateMovie/${movie.no}`, {
        method: "PUT",
        body: JSON.stringify(enteredMovie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        alert(json);
      }
      if (response.ok) {
        navigate("/");
      }
    } else {
      //Submit Movie
      const response = await fetch("/api/addMovie", {
        method: "POST",
        body: JSON.stringify(enteredMovie),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        alert(json);
      }
      if (response.ok) {
        navigate("/");
      }
    }
  };

  const checkboxChangeHandler = (e) => {
    // console.log(e.target.value);
    if (e.target.checked) {
      setGenreInfo([...genreInfo, e.target.value]);
    } else {
      setGenreInfo(genreInfo.filter((genre) => genre !== e.target.value));
    }
    // console.log(genreInfo);
  };

  const buttonText = () => {
    if (movie != null) return "Update Movie";
    return "Add Movie";
  };

  return (
    <div className="form-container">
      <h2>Please enter Movie Details</h2>
      <div className="movie-form">
        <form>
          <div className="row">
            <div className="col-1">
              <label htmlFor="name">Movie Name</label>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="name"
                ref={nameInputRef}
                defaultValue={movie && movie.name}
                placeholder="Name of the Movie"
              />
              {!formInputValidity.name && (
                <p>Please enter a valid Movie name</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="desc">Description</label>
            </div>
            <div className="col-2">
              <textarea
                type="text"
                placeholder="Summary of the Movie"
                id="desc"
                rows="3"
                ref={descInputRef}
                defaultValue={movie && movie.description}
              />
              {!formInputValidity.desc && (
                <p>Please enter a valid Description</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="year">Year of release</label>
            </div>
            <div className="col-2">
              <select
                type="dropdown"
                id="year"
                ref={yearInputRef}
                defaultValue={movie && movie.yearOfRelease}
              >
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label className="genre">Genre</label>
            </div>
            <div className="col-2">
              <ul className="checkbox-grid">
                {genres.map((g) => (
                  <li>
                    <label htmlFor={g}>
                      {g}
                      <input
                        type="checkbox"
                        id={g}
                        value={g}
                        onChange={checkboxChangeHandler}
                      />
                    </label>
                  </li>
                ))}
              </ul>
              {!formInputValidity.genre && <p>Please select a valid Genre</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="rating">Rating</label>
            </div>
            <div className="col-2">
              <input
                type="number"
                id="rating"
                min="1"
                max="10"
                step="0.1"
                placeholder="Rate 1 out of 10"
                ref={ratingInputRef}
                defaultValue={movie && movie.rating}
              />
              {!formInputValidity.rating && <p>Please enter a valid rating</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="poster-link">Movie Poster</label>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="poster-link"
                placeholder="Link of the Movie poster"
                ref={posterInputRef}
                defaultValue={movie && movie.posterUrl}
              />
              {!formInputValidity.poster && (
                <p>Please enter a valid Poster URL</p>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-1">
              <label htmlFor="trailer-link">Trailer Link</label>
            </div>
            <div className="col-2">
              <input
                type="text"
                id="trailer-link"
                placeholder="Link of the Youtube trailer"
                ref={trailerInputRef}
                defaultValue={movie && movie.trailerUrl}
              />
              {!formInputValidity.trailer && (
                <p>Please enter a valid Youtube Trailer link</p>
              )}
            </div>
          </div>

          <button onClick={submitHandler}>{buttonText()}</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
