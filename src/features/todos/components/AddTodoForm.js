import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Header } from 'semantic-ui-react';

class AddTodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

  state = {
    nameInputVal: '',
    descInputVal: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.nameInputVal !== '') {
      this.props.addTodo(this.state.nameInputVal, this.state.descInputVal);
      this.setState({
        nameInputVal: '',
        descInputVal: ''
      })
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <Header>Add new</Header>
        <Form.Input id="title" label="Title" action="Add" onChange={e => this.setState({ nameInputVal: e.target.value })} value={this.state.nameInputVal} />
        <Form.TextArea id="desc" label="Description (optional)" onChange={e => this.setState({ descInputVal: e.target.value })} value={this.state.descInputVal} placeholder="Optional description" />
      </Form>
    );
  }
}


export default AddTodoForm;