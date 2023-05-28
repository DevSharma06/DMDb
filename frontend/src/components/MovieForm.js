const MovieForm = () => {
  const genres = [
    "Action",
    "Animated",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
    "Western",
  ];

  const years = [];
  for (let i = 1980; i < 2024; i++) {
    years.push(i);
  }

  return (
    <div className="form-container">
      <h2>Please enter Movie Details</h2>
      <div className="movie-form">
        <form>
          <div class="row">
            <div class="col-1">
              <label htmlFor="name">Movie Name</label>
            </div>
            <div class="col-2">
              <input type="text" id="name" placeholder="Name of the Movie" />
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <label htmlFor="desc">Description</label>
            </div>
            <div class="col-2">
              <textarea
                type="text"
                placeholder="Summary of the Movie"
                id="desc"
                rows="3"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <label htmlFor="year">Year of release</label>
            </div>
            <div class="col-2">
              <select type="dropdown" id="year">
                {years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <label className="genre">Genre</label>
            </div>
            <div class="col-2">
              <ul className="checkbox-grid">
                {genres.map((g) => (
                  <li>
                    <label htmlFor={g}>
                      {g}
                      <input type="checkbox" id={g} />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <label htmlFor="rating">Rating</label>
            </div>
            <div class="col-2">
              <input
                type="number"
                id="rating"
                min="1"
                max="10"
                step="0.1"
                placeholder="Rate 1 out of 10"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <label htmlFor="poster-link">Movie Poster</label>
            </div>
            <div class="col-2">
              <input
                type="text"
                id="poster-link"
                placeholder="Link of the Movie poster"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-1">
              <label htmlFor="trailer-link">Trailer Link</label>
            </div>
            <div class="col-2">
              <input
                type="text"
                id="trailer-link"
                placeholder="Link of the Youtube trailer"
              />
            </div>
          </div>

          <button>Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
