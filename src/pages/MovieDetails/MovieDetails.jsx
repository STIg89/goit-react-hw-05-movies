import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  return (
    <main>
      <BackLink>Go back</BackLink>
      <MovieInfo />
      <AdditionalInfo />
    </main>
  );
};
