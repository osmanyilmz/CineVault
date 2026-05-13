import React from "react";

const SearchBar = ({ search, handleSearch, darkMode }) => {
  return (
    <input
      type="text"
      placeholder="Search movie..."
      className={
        darkMode
          ? "w-full p-4 rounded-xl bg-[#1F2937] text-white outline-none"
          : "w-full p-4 rounded-xl bg-white text-black outline-none border"
      }
      value={search}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
