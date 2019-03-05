import React, { Component } from 'react';
import Login from './LoginComponent';
import Signup from './SignupComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={() => <Login />} />
          <Route path="/signup" component={() => <Signup />} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default Main;
