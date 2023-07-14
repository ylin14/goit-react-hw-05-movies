import { useState, useEffect } from 'react';

import { getMovieCredits } from 'shared/service/moviesApi';
import { useParams } from 'react-router-dom';
import s from './cast.module.css';

function Cast() {
  const [cast, setCast] = useState({
    items: [],
    isLoading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setCast(prevMovies => ({ ...prevMovies, isLoading: true }));
      const { cast } = await getMovieCredits(id);

      try {
        setCast(prevMovies => ({
          ...prevMovies,
          items: cast,
          isLoading: false,
        }));
      } catch (error) {
        setCast(prevMovies => ({
          ...prevMovies,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    fetchMovies();
  }, [id]);

  const { items, isLoading, error } = cast;

  const elements = items.map(({ character, name, profile_path, id }) => {
    const photo = profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : 'https://sd.keepcalms.com/i/keep-calm-poster-not-found.png';
    return (
      <li className={s.item} key={id}>
        <img src={photo} alt={name} className={s.image} />
        <p className={s.text}>{name}</p>
        <p className={s.text}>{character}</p>
      </li>
    );
  });
  return (
    <>
      {items.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <p>We dont know anything about cast ...</p>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default Cast;
