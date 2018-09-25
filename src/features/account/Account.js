import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import AccountDetails from './AccountDetails';
import { logIn, logOut } from './reducer';

class Account extends Component {
  handleSubmit = (e, username) => {
    e.preventDefault();
    if (!username) return;

    this.props.logIn(username);
  };

  render() {
    const { username, logOut } = this.props;

    return (
      <div>
        <Route
          path="/account"
          render={() =>
            username ? (
              <AccountDetails logout={logOut} username={username} />
            ) : (
              <LogIn handleSubmit={this.handleSubmit} />
            )
          }
        />
      </div>
    );
  }
}

export default connect(
  state => ({ username: state.account }),
  { logIn, logOut }
)(Account);
