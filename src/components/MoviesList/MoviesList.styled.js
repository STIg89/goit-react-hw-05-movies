import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: 300ms linear;
  }

  > a {
    text-decoration: none;
  }

  img {
    max-width: 400px;
  }
`;

export const MovieName = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-weight: 700;
  text-align: center;
`;
