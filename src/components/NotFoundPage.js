import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404!</h1>
    <h3>
      <Link to="/">Go Home</Link>
    </h3>
  </div>
);

export default NotFoundPage;
