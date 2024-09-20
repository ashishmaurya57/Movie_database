import React, { useEffect, useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const BASE_URL = 'https://dummyapi.online/'; // Base URL for the API

  // Fetch movie data
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Movies:', data); // Log full data to inspect the structure
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchMovies();
  }, []);
  

  if (loading) {
    return <p>Loading movies...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Movie Database</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: '20px' }}>
            <h2>{movie.movie}</h2>
            {/* Log the full image URL */}
            <img 
  src="https://via.placeholder.com/200"  // Using a placeholder image to test rendering
  alt={movie.movie}
  style={{ width: '200px' }} 
/>


            <p>Rating: {movie.rating}</p>
            <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
              View on IMDb
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
