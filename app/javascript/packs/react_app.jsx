import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './App';
// Global styles
import './Globals.scss';

// I had a very weird problem trying to expose env variables to the client,
// I tried using dotenv

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
});
