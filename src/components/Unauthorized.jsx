import React from 'react';
import LoginModal from './LoginModal.jsx';

const Unauthorized = () => {
  return (
    <>
      <h1>Unauthorized - Please Login</h1>
      <LoginModal togglerColor='primary' />
    </>
  );
};

export default Unauthorized;
