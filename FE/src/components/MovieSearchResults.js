import React, { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { MovieSearchList } from "./MovieSearchList";
import { MovieDetails } from "./MovieDetails";

const API_KEY = "75dd50d6";

export const MovieSearchResults = () => {
  const [title, setTitle] = useState("");
  const [movieSearch, setMovieSearch] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
      setIsSearching(true);
      setSelectedMovie(null);
    } catch (err) {
      console.log(err);
    }
  };
  const handleMovieClick = (movieId) => {
    setSelectedMovie(movieSearch.find((movie) => movie.imdbID === movieId));
    setIsSearching(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Navbar
        input={setTitle}
        search={handleSearch}
        handleKeyPress={handleKeyPress}
      />
      {isSearching && !selectedMovie && (
        <MovieSearchList
          movies={movieSearch}
          title={title}
          onClick={handleMovieClick}
        />
      )}
      {selectedMovie && <MovieDetails imdbID={selectedMovie.imdbID} />}
      {!isSearching && !selectedMovie && <div>No movies found</div>}
    </div>
  );
};
