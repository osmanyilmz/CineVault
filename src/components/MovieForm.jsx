import React, { useEffect, useState } from "react";

const MovieForm = ({ addMovie, selectedMovie, updateMovie, darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (selectedMovie) {
      setFormData(selectedMovie);
    }
  }, [selectedMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedMovie) {
      updateMovie(selectedMovie.id, formData);
    } else {
      addMovie(formData);
    }

    setFormData({
      name: "",
      email: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        darkMode
          ? "bg-[#1E293B] p-5 rounded-2xl mb-6"
          : "bg-white p-5 rounded-2xl mb-6 shadow-lg"
      }
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Movie Name"
          className={
            darkMode
              ? "p-3 rounded-xl bg-[#111827] text-white"
              : "p-3 rounded-xl bg-gray-100 text-black border"
          }
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Movie Description"
          className={
            darkMode
              ? "p-3 rounded-xl bg-[#111827] text-white"
              : "p-3 rounded-xl bg-gray-100 text-black border"
          }
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />
      </div>

      <button className="mt-5 bg-purple-600 px-5 py-3 rounded-xl text-white hover:bg-purple-700 duration-300">
        {selectedMovie ? "Update Movie" : "Add Movie"}
      </button>
    </form>
  );
};

export default MovieForm;
