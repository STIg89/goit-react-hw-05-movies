import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovies } from 'services/fetchAPI';
import { Loader } from 'utils/spinner/spinner';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [onLoad, setOnLoad] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) return;
    setOnLoad(true);
    searchMovies(searchValue).then(response => {
      setMovies([...response]);
      setOnLoad(false);
    });
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {onLoad && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
export default Movies;
