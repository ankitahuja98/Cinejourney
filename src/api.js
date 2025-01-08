const url =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d4466a196df968ab78257253db7ad212";

const fetchMoviesApi = async (page) => {
  let response = await fetch(`${url}&page=${page}`);
  if (!response.ok) {
    throw new Error("Internal Server Error! Failed to Fetch Movies");
  }
  let data = await response.json();
  return data;
};

export const fetchAllMovies = async () => {
  let allMovies = [];
  for (let page = 1; page <= 50; page++) {
    const data = await fetchMoviesApi(page);
    if (data && data.results) {
      allMovies = allMovies.concat(data.results);
    }
  }
  return allMovies;
};
