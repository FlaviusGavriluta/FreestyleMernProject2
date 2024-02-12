export const MovieSearchList = ({ movies, title, onClick }) => (
  <div className="container border-light">
    <div className="row justify-content-md-start">
      <h1 className="my-3">Search "{title}"</h1>
      <h3 className="my-3">
        <i className="bi bi-grip-vertical"></i>Titles
      </h3>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <div
            className="card border-light mb-3"
            style={{ maxWidth: "auto", maxHeight: "75px" }}
          >
            <div className="row" style={{ alignItems: "center" }}>
              <div
                className="btn col-md-1"
                onClick={() => onClick(movie.imdbID)}
              >
                <img
                  src={movie.Poster}
                  style={{ maxWidth: "50px" }}
                  alt={movie.Poster}
                />
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
