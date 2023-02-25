import { CardWrapper, Container, MovieName } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';
import noPoster from 'img/sorry.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ poster_path, title, id }) => {
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noPoster
                }
                alt={title}
              />
              <MovieName>{title}</MovieName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
