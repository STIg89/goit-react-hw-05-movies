import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-bottom: 40px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover {
    transform: scale(1.05);
    transition: 300ms linear;
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.9);
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
