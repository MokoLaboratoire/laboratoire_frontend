import React from 'react'
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  let location = useLocation();
  return (
    <>
      <div>ContactPage</div>
      <div>location.pathname: {location.pathname}</div>
    </>
  )
}

export default ContactPage