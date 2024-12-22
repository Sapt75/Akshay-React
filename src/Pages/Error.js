import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>Status: {error.status || 'Unknown'}</p>
      <p>Message: {error.message || 'Something went wrong.'}</p>
      {/* Optionally, you can add a link to go back to the home page */}
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default Error