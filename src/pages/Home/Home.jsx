import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/fetchAPI';
import { Loader } from 'utils/spinner/spinner';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState(null);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    setOnLoad(true);
    getTrendingMovies().then(response => {
      setTrendingFilms([...response]);
      setOnLoad(false);
    });
  }, []);

  return (
    <main>
      {onLoad && <Loader />}
      {trendingFilms && <MoviesList movies={trendingFilms} />}
    </main>
  );
};
export default Home;
