import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchAPI';
import { Loader } from 'utils/spinner/spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backPath = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <main style={{ padding: '0 60px 40px 60px' }}>
      {movieDetails && (
        <>
          <BackLink to={backPath}>Go back</BackLink>
          <MovieInfo movieInfo={movieDetails} />
          <AdditionalInfo backPath={backPath} />
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
