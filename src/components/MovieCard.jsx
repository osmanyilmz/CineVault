import { FaTrash, FaEdit, FaStar } from "react-icons/fa";

const MovieCard = ({ movie, darkMode, deleteMovie, openEditModal }) => {
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
          movie.poster_path?.startsWith("http")
            ? movie.poster_path
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        className="h-[400px] w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.title}</h2>

        <p className="text-sm opacity-70 line-clamp-3">{movie.overview}</p>

        <div className="flex justify-between mt-3">
          <span>{movie.release_date}</span>

          <span className="flex items-center gap-1 text-yellow-400">
            <FaStar /> {movie.vote_average}
          </span>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => openEditModal(movie)}
            className="bg-yellow-500 p-2 rounded"
          >
            <FaEdit />
          </button>

          <button
            onClick={() => deleteMovie(movie.id)}
            className="bg-red-500 p-2 rounded text-white"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
