import React from "react";

export const Search = ({ input, handleKeyPress }) => (
  <div className="input-group rounded ps-5">
    <input
      type="search"
      className="form-control rounded"
      placeholder="Search OMDb"
      aria-label="Search"
      aria-describedby="search-addon"
      onChange={(e) => {
        e.preventDefault();
        input(e.target.value);
      }}
      onKeyDown={handleKeyPress}
      style={{
        height: "27px",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    />
    <style jsx>{`
      input::placeholder {
        font-size: 15px;
        color: #aaa;
      }
    `}</style>
  </div>
);
