import React from 'react';

import './Error.css';

import { FaRegTimesCircle } from 'react-icons/fa';

const Error = ({ children }) => {
  return (
    <div className="alert-error">
      <FaRegTimesCircle />
      <h2>{children}</h2>
    </div>
  );
};

export default Error;
