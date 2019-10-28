import React from "react";
import "./searchField-style.css";

function SearchField({ handleSearch, placeholder }) {
  return (
    <div id="recepty-menu-link" className="search-field-bg">
      <input
        type="search"
        className="search-field"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchField;
