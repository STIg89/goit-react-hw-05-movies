import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovies } from 'services/fetchAPI';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) return;
    const fetchSearchMovies = async () => {
      const data = await searchMovies(searchValue);
      setMovies(data);
    };
    fetchSearchMovies();
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
