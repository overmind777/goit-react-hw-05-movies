import { SearchForm } from 'components/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servises/api';

const Movies = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetQuery = movieName => {
    setSearchParams({ search: movieName });
  };
  const searchParam = searchParams.get('search') ?? '';

  useEffect(() => {
    const handleSearch = async movieName => {
      try {
        const results = await searchMovies(movieName);
        setSearchResults(results);
      } catch (error) {
        console.error('Помилка пошуку фільмів:', error);
      }
    };

    searchParam && handleSearch(searchParam);
  }, [searchParam, setSearchParams]);

  return (
    <div>
      <SearchForm handleSetQuery={handleSetQuery} />
      <div>
        <ul>
          {searchResults?.map(movie => (
            <li key={movie.id}>
              <Link
                to={movie.id.toString()}
                cover={movie.poster_path}
                state={{ from: location, searchResults }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
