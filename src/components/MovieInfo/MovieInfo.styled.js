import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
  border: 1px solid black;
`;

export const ImageWrap = styled.div`
  padding: 20px;
`;

export const Image = styled.img``;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const MovieName = styled.h2`
  font-size: 60px;
`;

export const DescriptionName = styled.h3`
  font-size: 30px;

  p {
    color: red;
  }
`;

export const Description = styled.p`
  font-size: 18px;
`;
