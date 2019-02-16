import React from 'react';
const Title = ({ title }) => (
  <h1>{(title.length && title) || 'webpack-static'}</h1>
);
export default Title;
