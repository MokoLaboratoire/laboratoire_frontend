import React from 'react';
import { useLocation } from 'react-router-dom';

const CodingPage = () => {
  let location = useLocation();
  return (
    <>
      <div>CodingPage</div>
      <div>location.pathname: {location.pathname}</div>
    </>
  );
};

export default CodingPage;
