import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

LogIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function LogIn({handleSubmit}) {
  return (
    <div>
      Please log in because you are not logged in mate:
      <Form onSubmit={handleSubmit}>
        <Form.Field id="username" control={Input} name="username" label="Username" action="Log in" placeholder="Username" />
      </Form>
    </div>
  );
};


export default LogIn;