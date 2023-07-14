import { useState, useEffect } from 'react';

import { getMovieReviews } from 'shared/service/moviesApi';
import { useParams } from 'react-router-dom';
import s from './reviews.module.css';

function Reviews() {
  const [reviews, setReviews] = useState({
    items: [],
    isLoading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setReviews(prevMovies => ({ ...prevMovies, isLoading: true }));
      const { results } = await getMovieReviews(id);

      try {
        setReviews(prevMovies => ({
          ...prevMovies,
          items: results,
          isLoading: false,
        }));
      } catch (error) {
        setReviews(prevMovies => ({
          ...prevMovies,
          error: error.message,
          isLoading: false,
        }));
      }
    };
    fetchMovies();
  }, [id]);

  const { items, isLoading, error } = reviews;

  const elements = items.map(({ author, content, id }) => {
    return (
      <li className={s.item} key={id}>
        <p className={s.title}>Author: {author}</p>

        <p className={s.text}>{content}</p>
      </li>
    );
  });
  return (
    <>
      {items.length > 0 ? (
        <ul className={s.list}>{elements}</ul>
      ) : (
        <p>We haven't any comments yet ...</p>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default Reviews;
