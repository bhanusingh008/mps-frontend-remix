import React from 'react';
import { Link } from 'react-router-dom';
import "./notFoundStyle.css"

const NotFound = () => {
  return (
    <div className='fourOfour'>
      <h1>404 - Page Not Found</h1>
          <p style={{textAlign: 'center'}}>Oops! The page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
