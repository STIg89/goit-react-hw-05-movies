import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Item = styled.li`
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img``;

export const Name = styled.p`
  font-weight: 700;
  padding: 0 10px;
`;

export const Character = styled.div`
  padding: 0 10px;

  p {
    font-weight: 700;
  }
`;
