import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Universal
import { BLOG, HOME } from './universal/pages';
// Page Components
import HomeIndex from './pages/HomeIndex';
import BlogIndex from './pages/BlogIndex';

const App = () => (
  <Router>
    <Switch>
      <Route path={HOME} exact render={(props) => (<HomeIndex {...props} />)} />
      <Route path={`/${BLOG}`} exact render={(props) => (<BlogIndex {...props} />)} />
    </Switch>
  </Router>
);

export default App;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" />,
    document.body.appendChild(document.createElement('div')),
  );
});
