import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import MoviesList from 'shared/component/MoviesList';
import { searchFilmByName } from 'shared/service/moviesApi';

function MoviesSearch() {
  const [state, setState] = useState({
    movies: [],
    isLoading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        return;
      }
      setState(prevState => ({ ...prevState, isLoading: true, error: null }));

      const { results } = await searchFilmByName(query);
      try {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          movies: [...results],
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          isLoading: false,
          error: error.message,
        }));
      }
    };
    fetchMovies();
  }, [query]);

  const setMovie = useCallback(
    query => {
      setSearchParams({ query });
      setState(prevState => ({ ...prevState, movies: [] }));
    },
    [setState, setSearchParams]
  );

  const { movies, isLoading, error } = state;

  return (
    <>
      <SearchBar onSubmit={setMovie} />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {Boolean(movies.length) && <MoviesList items={movies} />}
    </>
  );
}

export default MoviesSearch;
