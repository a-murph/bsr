import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import normalize from 'normalize.css'; // eslint-disable-line no-unused-vars

import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import './styles/index.css';

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <title>Birch Street Radio</title>
      </Helmet>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/blog" component={BlogPage} />
      </Switch>
    </div>
  );
}

export default App;
