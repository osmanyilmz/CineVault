import React from "react";

import { FaFilm, FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "flex justify-between items-center p-5 bg-[#111827] shadow-lg"
          : "flex justify-between items-center p-5 bg-white shadow-lg"
      }
    >
      <h1
        className={
          darkMode
            ? "text-4xl font-bold text-white flex items-center gap-3"
            : "text-4xl font-bold text-black flex items-center gap-3"
        }
      >
        <FaFilm />
        CineVault
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={
          darkMode
            ? "bg-purple-600 p-3 rounded-full text-white"
            : "bg-black p-3 rounded-full text-white"
        }
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default Navbar;
