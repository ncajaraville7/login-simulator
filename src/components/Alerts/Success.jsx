import React from 'react';

import './success.css';

import { FaCheck } from 'react-icons/fa';

const Success = ({ children }) => {
  return (
    <div className="alert-success">
      <FaCheck />
      <h2>{children}</h2>
    </div>
  );
};

export default Success;
