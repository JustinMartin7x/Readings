import React, { Component } from 'react'
import './styles/App.css';
import HomePage from './HomePage.js'
import Header from './Header.js'
import Quantity from './Quantity.js'
import CleanCode from './CleanCode.js'
import RedGreen from './RedGreen.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';





export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/Quantity"
              exact
              render={(routerProps) => <Quantity {...routerProps}
              />}
            />
            <Route
              path="/CleanCode"
              exact
              render={(routerProps) => <CleanCode {...routerProps}
              />}
            />
            <Route
              path="/RedGreen"
              exact
              render={(routerProps) => <RedGreen {...routerProps}
              />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}