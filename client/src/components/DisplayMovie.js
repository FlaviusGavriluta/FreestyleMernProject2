import { useState, useEffect } from "react";
const API_KEY = "75dd50d6";

export const DisplayMovie = ({ imdbID }) => {
  const [movieDetails, setMovieDetails] = useState("");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const handleClick = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const movie = await response.json();
        setMovieDetails(movie);
      } catch (err) {
        console.log(err);
      }
    };
    handleClick();

    fetch('http://127.0.0.1:3001/favorites')
      .then(response => response.json())
      .then(data => setWishlist(data));
  }, [imdbID]);

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
            {console.log(wishlist)}
            <button
              className="btn btn-light"
              style={{
                position: "absolute",
                top: 0,
                left: 12,
              }}
            >
              <i class="bi bi-bookmark-plus-fill"></i>
            </button>
          </div>

          <div className="col-md-auto">Variable width content</div>
          <div className="col col-lg-2">3 of 3</div>
        </div>
      </div>
    )
  );
};
