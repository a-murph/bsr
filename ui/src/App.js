import React from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  return (
    <div>
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
