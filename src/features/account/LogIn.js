import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

export default class LogIn extends Component {
  state = {
    username: '',
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        Please log in because you are not logged in mate:
        <Form onSubmit={e => handleSubmit(e, this.state.username)}>
          <Form.Field
            id="username"
            control={Input}
            name="username"
            label="Username"
            action="Log in"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </Form>
      </div>
    );
  }
}

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
