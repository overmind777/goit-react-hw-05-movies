import useHttp from 'hooks/useHttp';
import React, { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'servises/api';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const goBackRef = useRef(location.state?.from || '/');
  console.log(goBackRef);
  const [movie] = useHttp(fetchMovieById, movieId);
  return (
    <Wrapper>
      <Link to={goBackRef.current}>
        <button>Go back</button>
      </Link>
      <WrapperTop>
        <Img
          src={
            movie?.poster_path
              ? `http://image.tmdb.org/t/p/w500${movie?.poster_path}`
              : null
          }
          alt={movie?.original_title}
          width="300"
          height="300"
        />
        <WrapperRight>
          <h2>{movie?.original_title}</h2>
          <p>User Score: {Math.round(movie?.vote_average)}/10</p>
          <span>Overview</span>
          <p>{movie?.overview}</p>
          <span>Genres</span>
          <p>
            {movie?.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </WrapperRight>
      </WrapperTop>
      <hr />
      <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>

      <hr />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 10px;
`;

const WrapperTop = styled.div`
  display: flex;
  gap: 20px;
`;

const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Img = styled.img`
  display: block;
`;

export default MovieDetails;
