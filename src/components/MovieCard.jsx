import React from "react";

import { FaStar } from "react-icons/fa";

const MovieCard = ({ movie, darkMode }) => {
  return (
    <div
      className={
        darkMode
          ? "bg-[#1E293B] rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300"
          : "bg-white rounded-2xl overflow-hidden shadow-xl hover:scale-105 duration-300"
      }
    >
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750"
        }
        alt={movie.title}
        className="w-full h-[500px] object-cover"
      />

      <div className="p-5">
        <h2
          className={
            darkMode
              ? "text-2xl font-bold text-white"
              : "text-2xl font-bold text-black"
          }
        >
          {movie.title}
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-400 mt-2 line-clamp-3"
              : "text-gray-600 mt-2 line-clamp-3"
          }
        >
          {movie.overview}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className={darkMode ? "text-gray-300" : "text-gray-700"}>
            {movie.release_date}
          </span>

          <div className="flex items-center gap-2 text-yellow-400">
            <FaStar />

            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
