import { useMovieDetails } from "./useMovieDetails";
import { useState } from "react";

export const MovieDetails = ({ imdbID }) => {
  const { movieDetails, wishlist } = useMovieDetails(imdbID);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
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
          <div className="col" style={{ position: "relative" }}>
            <img src={movieDetails.Poster} style={{ width: "40%" }} />
            <span
              onClick={handleBookmarkClick}
              style={{
                position: "absolute",
                top: -10,
                left: 7,
                fontSize: 40,
              }}
            >
              <i
                className={`bi ${
                  isBookmarked
                    ? "bi-bookmark-check-fill text-warning icon"
                    : "bi-bookmark-plus-fill icon"
                } p-0 m-0`}
              ></i>
            </span>
          </div>
          <div className="col-md-auto">Variable width content</div>
          <div className="col col-lg-2">3 of 3</div>
        </div>
      </div>
    )
  );
};
