import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import logException from '../../classes/Sentry';
import IndexView from '../IndexView';
import HomeView from '../HomeView';
import WorksView from '../WorksView';
import '../../stylesheets/buttons.css';


export default class App extends Component {
  render() {
    try {
      return (
        <Router history={ hashHistory }>
          <Route path="/" component={ IndexView }>
            <IndexRoute component={ HomeView } />
            <Route path="/home" component={ HomeView } />
          </Route>

          <Route path="/works/:name" component={ WorksView } />
        </Router>
      );
    } catch (ex) {
      logException(ex);
    }
  }
}
