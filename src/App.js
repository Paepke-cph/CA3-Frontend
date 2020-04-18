import React from 'react';
import Header from './components/Header.jsx';
import Routes from './config/Routes.jsx';
import { Container } from '@material-ui/core/';
import ProvideAuth from './hooks/useAuth.jsx';
import { StateProvider } from './contexts/StateContext.jsx';

function App() {
  return (
    <StateProvider>
      <ProvideAuth>
        <Header />
        <Container maxWidth='lg'>
          <Routes />
        </Container>
      </ProvideAuth>
    </StateProvider>
  );
}

export default App;
