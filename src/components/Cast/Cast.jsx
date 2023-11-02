import useHttp from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'servises/api';

const Cast = () => {
  const { movieId } = useParams();
  const [actors] = useHttp(fetchCastById, movieId);

  if (!actors) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {actors?.map(actor => {
        return (
          <li key={actor.id}>
            <img
              src={
                actor?.profile_path
                  ? `http://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : null
              }
              alt="name.name"
              width="100"
              height="150"
            />
            <p>{actor.name}</p>
            <p>Charaster: {actor.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
