import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

import { getMovies, searchMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetchMovies();

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchMovies = async () => {
    const response = await getMovies();

    setMovies(response.data.results);
  };

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);

    if (value.trim() === "") {
      fetchMovies();
    } else {
      const response = await searchMovies(value);

      setMovies(response.data.results);
    }
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-[#0F172A] duration-300"
          : "min-h-screen bg-gray-100 duration-300"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="p-6">
        <div className="mb-6">
          <SearchBar
            search={search}
            handleSearch={handleSearch}
            darkMode={darkMode}
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
