import React from 'react'
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  let location = useLocation();
  return (
    <>
      <div>HomePage</div>
      <div>location.pathname: {location.pathname}</div>
    </>
  )
}

export default HomePage