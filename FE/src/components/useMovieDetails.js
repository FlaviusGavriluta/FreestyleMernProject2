import { useState, useEffect } from "react";

const API_KEY = "75dd50d6";

export const useMovieDetails = (imdbID) => {
  const [movieDetails, setMovieDetails] = useState("");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
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
    fetchMovieDetails();
  }, [imdbID]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3001/favorites");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWishlist(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWishlist();
  }, []);

  return { movieDetails, wishlist };
};