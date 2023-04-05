import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { MoviesSearch } from "./MoviesSearch";

const API_KEY = "75dd50d6";

export const Movies = () => {
  const [title, setTitle] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);
  const [isPressed, setIsPressed] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const movies = await response.json();
      if (movies.Search) setMovieSearch(movies.Search);
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setIsPressed(true);
    }
  };

  return (
    <div>
      <Navbar
        input={setTitle}
        search={handleSearch}
        handleKeyPress={handleKeyPress}
      />
      {isPressed ? (
        <MoviesSearch movies={movieSearch} title={title} />
      ) : (
        <div>No movies found</div>
      )}
    </div>
  );
};
