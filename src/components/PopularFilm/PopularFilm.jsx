import { useState, useEffect } from 'react';

import { popularMovies } from 'shared/service/moviesApi';
import MoviesList from 'shared/component/MoviesList';

const PopularFilm = () => {
  const [movies, setMovies] = useState({
    items: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setMovies(prevMovies => ({ ...prevMovies, isLoading: true }));
      const { results } = await popularMovies();

      try {
        setMovies(prevMovies => ({
          ...prevMovies,
          items: results,
          isLoading: false,
        }));
      } catch (error) {
        setMovies(prevMovies => ({
          ...prevMovies,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    fetchPopularMovies();
  }, []);

  const { items, isLoading, error } = movies;

  return (
    <>
      {Boolean(items.length) && <MoviesList items={items} />}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default PopularFilm;
