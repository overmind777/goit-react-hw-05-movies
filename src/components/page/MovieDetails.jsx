import useHttp from 'hooks/useHttp';
import React, { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'servises/api';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const goBackRef = useRef(location.state?.from || '/');
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
          <Span>Overview</Span>
          <p>{movie?.overview}</p>
          <Span>Genres</Span>
          <Span>
            {movie?.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </Span>
        </WrapperRight>
      </WrapperTop>
      <hr />
      <p>Additional information</p>
      <List>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </List>

      <hr />
      <div>
        <Outlet />
      </div>
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

const Span = styled.span`
  display: flex;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  & p {
    font-weight: normal;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default MovieDetails;
