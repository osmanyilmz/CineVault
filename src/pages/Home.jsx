import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieForm from "../components/MovieForm";
import MovieCard from "../components/MovieCard";

import { getMovies, searchMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [editingMovie, setEditingMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMovies();

    const saved = localStorage.getItem("theme");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchMovies = async () => {
    const res = await getMovies();
    setMovies(res.data.results);
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      fetchMovies();
    } else {
      const res = await searchMovies(value);
      setMovies(res.data.results);
    }
  };

  const addMovie = (movie) => {
    const newMovie = {
      ...movie,
      id: Date.now(),
    };

    setMovies([newMovie, ...movies]);
    setShowModal(false);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  const updateMovie = (movie) => {
    setMovies(
      movies.map((m) =>
        m.id === movie.id
          ? {
              ...m,
              title: movie.title,
              overview: movie.overview,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average,
              release_date: movie.release_date,
            }
          : m,
      ),
    );

    setEditingMovie(null);
    setShowModal(false);
  };

  const openAddModal = () => {
    setEditingMovie(null);
    setShowModal(true);
  };

  const openEditModal = (movie) => {
    setEditingMovie(movie);
    setShowModal(true);
  };

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-[#0F172A] text-white"
          : "min-h-screen bg-gray-100 text-black"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="p-6">
        <div className="flex gap-3 mb-6">
          <SearchBar
            search={search}
            handleSearch={handleSearch}
            darkMode={darkMode}
          />

          <button
            onClick={openAddModal}
            className="bg-purple-600 px-4 py-2 rounded-xl text-white hover:bg-purple-700 whitespace-nowrap"
          >
            Add Movie
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              darkMode={darkMode}
              deleteMovie={deleteMovie}
              openEditModal={openEditModal}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <MovieForm
          addMovie={addMovie}
          updateMovie={updateMovie}
          editingMovie={editingMovie}
          darkMode={darkMode}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Home;
