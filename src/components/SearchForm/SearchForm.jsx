import { useState } from 'react';
import { Wrapper, Input, Icon, Form, Btn } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onInputChange = e => setValue(e.target.value);

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(value);
    resetForm();
  };

  const resetForm = () => setValue('');

  return (
    <Wrapper>
      <Form onSubmit={onSubmitForm}>
        <Input
          type="text"
          value={value}
          autocomplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={onInputChange}
        />
        <Btn type="submit">
          <Icon />
        </Btn>
      </Form>
    </Wrapper>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
