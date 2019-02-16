import React from 'react';
const description =
  'This page is a result of webpack and babel working together to bundle a very simple static react page that should be compatible with old browsers.';
const controls =
  'Use the controls below to play around with react state and check the console for a link to the source.';
const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
const Body = ({ body }) => (
  <div>
    {(
      (body.length && body.some(e => e.length) && body) || [
        description,
        controls,
        lorem,
      ]
    ).map((content, i) => (
      <p key={i}>{content}</p>
    ))}
  </div>
);

export default Body;
