import React from 'react';
import error from '../assets/img/Errormessage.jpeg'
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const errorImageURL = error // Example image from Lorem Picsum
    const err = useRouteError();
    console.log(err)
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>{err.status + ":" + err.statusText}</h2>
      <img
        src={errorImageURL}
        alt="Error Illustration"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <h1>Oops! Something went wrong</h1>
      <p>We apologize for the inconvenience. Please try again later.</p>
    </div>
  );
};

export default ErrorPage;
