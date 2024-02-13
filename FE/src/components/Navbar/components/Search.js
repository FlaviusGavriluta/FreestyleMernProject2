import React from "react";

export const Search = ({ input, search, handleKeyPress }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  return (
    <form className="search-form" role="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="search"
        placeholder="Search OMDb"
        aria-label="Search"
        onChange={(e) => {
          e.preventDefault();
          input(e.target.value);
        }}
        onKeyDown={handleKeyPress}
      />
      <button className="search-button bg-dark" type="submit">
        <i className="bi bi-search"></i>
      </button>
      <style jsx>{`
        .search-input {
          font-size: 0.9rem;
          padding: 0.5rem;
        }
        ::placeholder {
          font-size: 0.9rem;
        }
      `}</style>
    </form>
  );
};