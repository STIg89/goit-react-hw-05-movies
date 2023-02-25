import { Item, List, Name, Review } from './ReviewsList.styled';

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
