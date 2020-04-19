import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import LandingPage from 'pages/LandingPage';
import TeamPage from 'pages/TeamPage';
import ProjectsPage from 'pages/ProjectsPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <LandingPage {...props} />} />
      <Route
        path="/projects"
        exact
        render={(props) => <ProjectsPage {...props} />}
      />
      <Route
        path="/projects/:slug"
        exact
        render={(props) => <ProjectsPage {...props} />}
      />
      <Route path="/team" exact render={(props) => <TeamPage {...props} />} />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
