import {
  Image,
  ImageWrap,
  Wrapper,
  InfoWrap,
  MovieName,
  DescriptionName,
  Description,
} from './MovieInfo.styled';
import noPoster from 'img/sorry.png';
import PropTypes from 'prop-types';

export const MovieInfo = ({
  movieInfo: { poster_path, title, vote_average, genres, overview },
}) => {
  return (
    <Wrapper>
      <ImageWrap>
        <Image
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noPoster
          }
          alt={title}
        />
      </ImageWrap>
      <InfoWrap>
        <MovieName>{title}</MovieName>
        <DescriptionName>
          User Score: <p>{Math.round(vote_average * 10)}%</p>
        </DescriptionName>
        <DescriptionName>Overview</DescriptionName>
        <Description>{overview}</Description>
        <DescriptionName>Genres</DescriptionName>
        <Description>{genres.map(genre => genre.name).join(' , ')}</Description>
      </InfoWrap>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  genres: PropTypes.array,
  overview: PropTypes.string,
};
