import { useMovieDetails } from "./useMovieDetails";
import { useState, useEffect } from "react";

export const MovieDetails = ({ imdbID }) => {
  const { movieDetails, wishlist } = useMovieDetails(imdbID);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(wishlist.some((movie) => movie.imdbID === imdbID));
  }, [wishlist, imdbID]);

  const handleBookmarkClick = () => {
    isBookmarked
      ? fetch("http://127.0.0.1:3001/favorites", {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ imdbID: imdbID }),
        }).then(() => {
          setIsBookmarked(!isBookmarked);
        })
      : fetch("http://127.0.0.1:3001/favorites", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ imdbID: imdbID }),
        }).then(() => {
          setIsBookmarked(!isBookmarked);
        });
  };

  return (
    movieDetails && (
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col">
            <h1>{movieDetails.Title}</h1>
          </div>
          <div className="col-md-auto">
            <div className="row">IMDb RATING</div>
            <button className="btn row">
              <i className="bi bi-star-fill col"></i>
              <div className="col"> {movieDetails.Ratings[0].Value}</div>
              <div className="col">{movieDetails.imdbVotes}</div>
            </button>
          </div>
          <div className="col col-lg-2">
            <div className="row">YOUR RATING</div>
            <button className="btn row">
              <i className="bi bi-star col"></i>
              <div className="col"> RATE</div>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-auto" style={{ position: "relative" }}>
            <div className="card" style={{ width: "23vw", height: "28vh" }}>
              <img src={movieDetails.Poster} alt=""/>
              <span
                onClick={handleBookmarkClick}
                style={{
                  position: "absolute",
                  top: -14,
                  left: -7,
                  fontSize: 50,
                }}
              >
                <i
                  className={`bi position-relative ${
                    isBookmarked
                      ? "bi-bookmark-check-fill text-warning"
                      : "bi-bookmark-plus-fill"
                  } icon`}
                ></i>
              </span>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card border-0" style={{ height: "28vh" }}>
              <div className="card-body">
                <div className="card-title"></div>
                <h4 className="card-title">{movieDetails.Plot}</h4>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-auto">
                      <h5 className="fw-bold">Director</h5>
                    </div>

                    <div className="col-md-auto text-primary">
                      <h5>{movieDetails.Director}</h5>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-auto">
                      <h5 className="fw-bold">Writers</h5>
                    </div>

                    <div className="col-md-auto text-primary">
                      <div className="col-md-auto text-primary">
                        <h5 className="dot">
                          {movieDetails.Writer.replace(/,\s/g, " · ")}
                        </h5>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col-md-auto">
                      <h5 className="fw-bold">Stars</h5>
                    </div>

                    <div className="col-md-auto text-primary">
                      <h5>{movieDetails.Actors.replace(/,\s/g, " 	· ")}</h5>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <button className="border-0 bg-success">
                  {movieDetails.Metascore}
                </button>{" "}
                Metascore
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
