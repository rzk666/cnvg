import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './App';

export default App;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
