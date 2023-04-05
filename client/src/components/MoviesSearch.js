export const MoviesSearch = ({ movies, title }) => (
  <div className="container border-light">
    <div className="row justify-content-md-start">
      <h1 className="my-3">Search "{title}"</h1>
      <h3 className="my-3">
        <i class="bi bi-grip-vertical"></i>Titles
      </h3>
      {movies.map((movie, i) => (
        <div key={i}>
          <div
            className="card border-light mb-3"
            style={{ maxWidth: "auto", maxHeight: "75px" }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-1">
                <img src={movie.Poster} style={{ maxWidth: "50px" }} />
              </div>
              <div className="col">
                <div className="fw-bold">{movie.Title}</div>
                <div className="text-secondary">{movie.Year}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
