import { useEffect, useState } from "react";

const MovieForm = ({
  addMovie,
  updateMovie,
  editingMovie,
  darkMode,
  setShowModal,
}) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title || "");
      setOverview(editingMovie.overview || "");
      setPoster(editingMovie.poster_path || "");
    } else {
      setTitle("");
      setOverview("");
      setPoster("");
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      id: editingMovie ? editingMovie.id : Date.now(),
      title,
      overview,
      poster_path: poster,
      vote_average: editingMovie?.vote_average || 8.0,
      release_date: editingMovie?.release_date || "2026",
    };

    if (editingMovie) {
      updateMovie(movie);
    } else {
      addMovie(movie);
    }

    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className={
          darkMode
            ? "bg-[#1E293B] p-6 rounded-xl w-[500px]"
            : "bg-white p-6 rounded-xl w-[500px]"
        }
      >
        <h2 className="text-xl font-bold mb-4">
          {editingMovie ? "Update Movie" : "Add Movie"}
        </h2>

        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2 mb-3 border rounded"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />

        <textarea
          className="w-full p-2 mb-3 border rounded"
          placeholder="Overview"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        />

        <button className="bg-purple-600 text-white w-full py-2 rounded">
          {editingMovie ? "Update" : "Add"}
        </button>

        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="w-full mt-2 text-red-500"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
