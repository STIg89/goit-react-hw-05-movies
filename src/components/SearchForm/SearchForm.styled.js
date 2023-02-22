import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  width: 40px;
`;

export const Icon = styled(HiSearch)`
  display: block;
  width: 20px;
  height: 20px;
  right: 6px;
`;
