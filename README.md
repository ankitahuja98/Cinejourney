**Cine Journey - Movie Search Application **

This is a movie search application built with ReactJS, utilizing React Query to fetch movie data and manage application state, and Tailwind CSS for styling. The application allows users to search for movies, view movie details, and navigate through the results with pagination. 

Live Website Link: 

**Project Structure Overview **

**File Structure ** 

/src  
  ├── /Components  
  │   ├── Error.js  
  │   ├── Loader.js  
  │   ├── MovieSearch.js  
  ├── api.js  
  ├── App.js  
  └── App.css 


**1. App.js **

Location: src/App.js 

Description: The entry point of the React application. It renders the MovieSearch component inside a wrapper with styling for the background and full-screen height. 

**Key Elements: **

Import MovieSearch component to handle the movie list and search functionality. 

Apply a full-screen background using Tailwind CSS utility classes (bg-gray-900, min-h-screen). 


**2. MovieSearch.js **

Location: src/Components/MovieSearch.js 

Description: Handles the core functionality of fetching, displaying, and searching the movie list. It uses React Query to fetch movies asynchronously and manage application state for search, pagination, and results display. 

**Key Features: **

State Management: 

input: Captures the user's search query. 

currentPage: Keeps track of the current page for pagination. 

Fetching Movies: 

Uses useQuery hook from React Query to fetch movies asynchronously from the API. 

Search Handling: 

Allows users to filter movies based on their search input. 

Pagination: 

Displays a set number of movies per page and handles page navigation (previous/next). 

Error Handling: 

Displays an error message if the movies fail to load. 

Loading State: 

Shows a loader while data is being fetched. 


**3. Loader.js **

Location: src/Components/Loader.js 

Description: Displays a circular loading spinner when the data is being fetched. Uses Material-UI's CircularProgress component for the loading spinner. 


**4. Error.js **

Location: src/Components/Error.js 

Description: Displays an error message if there is an issue with fetching the movie data, such as network failure or API errors. 


**5. api.js **

Location: src/api.js 

Description: Handles the API requests for fetching movie data. It uses The Movie Database (TMDb) API to get a list of top-rated movies. The fetchAllMovies function fetches all movies by iterating through multiple pages of results and combines them into a single array. 

**Key Functions: **

fetchMoviesApi(page): Fetches movies from a specific page. 

fetchAllMovies(): Fetches movies from all pages and combines the results. 


**Summary of Functionality **

Movie List: Displays a list of movies fetched from The Movie Database API. 

Search Bar: Users can search movies by title. The search is case-insensitive and dynamically filters the list. 

Pagination: Users can navigate through the list of movies with "Next" and "Previous" buttons, with a fixed number of movies per page. 

Error Handling: If an API call fails, an error message is shown. 

Loading Indicator: A loader is displayed when the data is being fetched. 
