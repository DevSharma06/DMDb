import MovieForm from "../components/MovieForm";
import { useLocation } from "react-router-dom";

const AddMovie = () => {
  const { state } = useLocation();
  let movie;
  if (state != null) movie = state;

  const movieAddedHandler = async (movie) => {};

  return (
    <div>
      <MovieForm movie={movie} />
    </div>
  );
};

export default AddMovie;
