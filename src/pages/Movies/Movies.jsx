import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovies } from 'services/fetchAPI';

export const Movies = () => {
  const [searchValue, setSearchValue] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!searchValue) return;
    const fetchSearchMovies = async () => {
      const data = await searchMovies(searchValue);
      setMovies(data);
    };
    fetchSearchMovies();
  }, [searchValue]);

  const onInputSearch = value => {
    setSearchValue(value);
  };

  return (
    <main>
      <SearchForm onSubmit={onInputSearch} />
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};
