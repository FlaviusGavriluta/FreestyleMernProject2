import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";

export const Movies = () => {
  const [title, setTitle] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handleSearch = () => {
    setIsPressed(true);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=75dd50d6&s=${title}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const movies = await response.json();
        if (movies.Search) setMovieSearch(movies.Search);
        else setIsPressed(false);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [title]);

  return (
    <div>
      <Navbar input={setTitle} search={handleSearch} />
      {isPressed ? (
        movieSearch.map((movie, i) => (
          <div key={i}>
            <img src={movie.Poster} />
          </div>
        ))
      ) : (
        <div>STANDARD</div>
      )}
    </div>
  );
};
