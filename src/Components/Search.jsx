import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="Search pb-3 pt-3">
      <input
        placeholder="Busrcar Personaje"
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;
