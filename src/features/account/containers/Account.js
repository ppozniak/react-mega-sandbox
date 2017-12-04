import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from '../components/LogIn';
import AccountDetails from '../components/AccountDetails';
import { Route, Redirect } from 'react-router-dom';
import { logIn } from '../actions';
class Account extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.logIn('Andrzej');
  }

  render() {
    const { username } = this.props;

    const redirectTo = username ? "details" : "login";
    return (
      <div>
        <Redirect to={`/account/${redirectTo}`} />
        <Route path="/account/login" render={() => <LogIn handleSubmit={this.handleSubmit}/>} />
        <Route path="/account/details" render={() => <AccountDetails username={username} />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.username
});

export default connect(
  mapStateToProps,
  { logIn }
)(Account);