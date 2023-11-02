import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchForm = ({ handleSetQuery }) => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    handleSetQuery(searchText);
    setSearchText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        placeholder="Find your movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};
SearchForm.propTypes = {
  handleSetQuery: PropTypes.func.isRequired,
};
