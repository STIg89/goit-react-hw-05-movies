import { CardWrapper, Container, MovieName } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ poster_path, title, id }) => {
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
