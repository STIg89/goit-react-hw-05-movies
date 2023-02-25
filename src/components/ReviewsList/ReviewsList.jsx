import { Item, List, Name, Review } from './ReviewsList.styled';
import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ author, id, content }) => {
        return (
          <Item key={id}>
            <Name>{author}</Name>
            <Review>{content}</Review>
          </Item>
        );
      })}
    </List>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
