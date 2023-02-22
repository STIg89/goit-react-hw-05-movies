import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/fetchAPI';

export const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await getTrendingMovies();
      setTrendingFilms(data);
    };
    fetchTrendingMovies();
  }, []);

  return <main>{trendingFilms && <MoviesList movies={trendingFilms} />}</main>;
};
