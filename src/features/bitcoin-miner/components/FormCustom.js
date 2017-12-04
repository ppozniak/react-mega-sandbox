import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form } from 'semantic-ui-react';

class BuyBitcoinsForm extends Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field component={Form.Input} name="first-input" type="text" />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'buy-bitcoins'
})(BuyBitcoinsForm);