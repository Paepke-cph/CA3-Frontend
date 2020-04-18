import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch.jsx';
import Content3 from '../components/Content3.jsx';
import Scrape from '../components/Scrape.jsx';
import Jokes from '../components/Jokes.jsx';
import Home from '../components/Home.jsx';
import ProtectedRoute from '../components/routes/ProtectedRoute.jsx';
import Unauthorized from '../components/Unauthorized.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <ProtectedRoute authenticatedRoles={['user','admin']} path='/jokes'>
        <Jokes />
      </ProtectedRoute>

      <ProtectedRoute authenticatedRoles={['admin']} path='/scrape'>
        <Scrape />
      </ProtectedRoute>

      <Route path='/content3'>
        <Content3 />
      </Route>
      <Route path='/unauthorized'>
        <Unauthorized />
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default Routes;
