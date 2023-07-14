import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const LayOut = lazy(() => import('./LayOut'));
const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>....Loading</p>}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
