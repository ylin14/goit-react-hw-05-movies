import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import FilmOption from 'components/FilmOption';

import s from './movieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <div className={s.container}>
      <button type="button" className={s.btn} onClick={goBack}>
        Go Back{' '}
      </button>
      <FilmOption id={id} />
      <Link state={{ from }} to={`/movies/${id}/cast`} className={s.link}>
        {' '}
        Cast{' '}
      </Link>
      <Link state={{ from }} to={`/movies/${id}/reviews`} className={s.link}>
        {' '}
        Reviews{' '}
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
