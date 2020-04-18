import React from 'react';
import ToggleContent from './utils/ToggleContent.jsx';
import Modal from './utils/Modal.jsx';
import LogIn from '../components/Login.jsx';
import { Button } from '@material-ui/core';
import { useAuth } from '../hooks/useAuth.jsx';

const LoginModal = ({ togglerColor = 'default' }) => {
  const {
    user: { isLoggedIn }
  } = useAuth();

  // Toggler
  const loginBtn = (show) => {
    const btnTxt = isLoggedIn ? 'Logout' : 'Login';
    return (
      <Button variant='contained' color={togglerColor} onClick={show}>
        {btnTxt}
      </Button>
    );
  };

  // Content
  const modalContent = (hide) => {
    return (
      <Modal hideModal={hide}>
        <LogIn hideModal={hide} />
      </Modal>
    );
  };

  return (
    <ToggleContent
      toggler={(show) => loginBtn(show)}
      content={(hide) => modalContent(hide)}
    />
  );
};

export default LoginModal;
