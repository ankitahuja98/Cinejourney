import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchAllMovies } from "../api";
import Loader from "./Loader";
import Error from "./Error";

const MovieSearch = () => {
  const [input, setInput] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  // Fetching movies using React Query
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchAllMovies,
  });

  // Handle input change
  const handleSearchChange = (e) => {
    setInput(e.target.value);
    setCurrentPage(1);
  };

  // Error handling, If unable to fetch Api
  if (isError) {
    return <Error />;
  }

  // Filter movies based on search input
  let filteredMovies = data?.filter((val) =>
    val.title?.toLowerCase().includes(input?.toLowerCase())
  );

  // If no input, show all movies
  if (filteredMovies?.length === 0 && !input) {
    filteredMovies = data;
  }

  // Pagination Logic
  const totalMovies = filteredMovies?.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);
  const currentMovies = filteredMovies?.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl text-white mb-4 text-center">Cine Journey </h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="w-full p-2 rounded bg-gray-700 text-white"
          value={input}
          onChange={handleSearchChange}
        />
      </div>

      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div>
          {filteredMovies?.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentMovies.map((movie) => (
                  <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <h3 className="text-xl text-white mt-2">{movie.title}</h3>
                    <p className="mt-1 text-sm text-gray-400 line-clamp-5">
                      {movie.overview}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-10 mb-4">
                <button
                  className={`px-4 py-2 mx-2 bg-gray-600 text-white rounded ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex items-center">
                  <span className="text-white">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>

                <button
                  className={`px-4 py-2 mx-2 bg-gray-600 text-white rounded ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center text-white ">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
