import { Routes, Route } from 'react-router-dom';
import HomePage from './page/Home';
import Movies from './page/Movies';
import Layout from './Layout/Layout';
import NotFound from './page/NotFound';
import { lazy } from 'react';

// import Cast from './Cast/Cast';
// import MovieDetails from './page/MovieDetails';
// import Reviews from './Reviews/Reviews';
const Cast = lazy(() => import('./Cast/Cast'));
const MovieDetails = lazy(() => import('./page/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
