import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'assets/vendor/nucleo/css/nucleo.css';
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/argon-design-system-react.scss?v1.1.0';

import LandingPage from 'pages/LandingPage';
import ProjectsPage from 'pages/ProjectsPage';
import VolunteersPage from 'pages/VolunteersPage';
import MutualAidPage from 'pages/MutualAidPage';
import FundraisingPage from 'pages/FundraisingPage';
import AboutPage from 'pages/AboutPage';
import PartnersPage from 'pages/PartnersPage';


ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact render={(props) => <LandingPage {...props} />} />
      <Route
        path="/about/:slug?"
        exact
        render={(props) => <AboutPage {...props} />}
      />
      <Route
        path="/projects/:slug?"
        exact
        render={(props) => <ProjectsPage {...props} />}
      />
      <Route
        path="/volunteers/:slug?"
        exact
        render={(props) => <VolunteersPage {...props} />}
      />
      <Route
        path="/mutualaid/:slug?"
        exact
        render={(props) => <MutualAidPage {...props} />}
      />
      <Route
        path="/fundraising/:slug?"
        exact
        render={(props) => <FundraisingPage {...props} />}
      />
          <Route
        path="/partners/:slug?"
        exact
        render={(props) => <PartnersPage {...props} />}
      />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
