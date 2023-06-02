import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieDetails = () => {
  const [ movies, setMovies ] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("/api/movies");
      const json = await response.json();

      if (response.ok) {
        setMovies(json);
      } else {
        console.log(response);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-details">
      {movies && movies.map((m) => <MovieItem movie={m} key={m._id} />)}
    </div>
  );
};

export default MovieDetails;
