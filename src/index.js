import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import './style.css';

const AppWithRouter = () => {
  return (
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));
