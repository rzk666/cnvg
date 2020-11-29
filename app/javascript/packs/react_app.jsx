import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  // Add Routing
  <div>
    Hello
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
