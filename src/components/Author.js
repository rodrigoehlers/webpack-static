import React from 'react';
const Author = ({ author }) => (
  <p>{`${(author.length && author) || 'Rodrigo Ehlers'}`}</p>
);
export default Author;
