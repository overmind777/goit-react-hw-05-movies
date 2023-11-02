import useHttp from 'hooks/useHttp';
import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'servises/api';
import styled from 'styled-components';

const HomePage = () => {
  const location = useLocation();
  const [tradingMovies] = useHttp(fetchMovies);

  return (
    <Wrapper>
      <ul>
        {tradingMovies?.results.map(tr => (
          <li key={tr.id}>
            <Link state={{ from: location }} to={`movies/${tr.id}`}>
              {tr.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 20px;
`;

export default HomePage;
