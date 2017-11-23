import React, { Component } from 'react';
import { array, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, changeFilter } from '../actions';
import { getVisibleTodos } from '../reducer';
import { SHOW_ALL, SHOW_DONE, SHOW_UNDONE } from '../constants';
import { Button, Header, Icon, Input } from 'semantic-ui-react';
import Todo from '../components/Todo';
import ErrorBoundary from '../components/ErrorBoundary';
import FilterLink from '../components/FilterLink';

class TodoList extends Component {
  static propTypes = {
    todos: array.isRequired,
    currentFilter: string.isRequired,
    toggleTodo: func.isRequired
  }

  state = {
    inputVal: ''
  }

  addTodo = () => {
    this.props.addTodo( this.state.inputVal );
    this.setState({
      inputVal: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputVal !== '') {
      this.addTodo();
    }
  }

  render() {
    const {
      todos,
      toggleTodo,
      currentFilter,
      routerFilter
    } = this.props;

    const todosListed = (
    <ul>
      {todos.map((todo, i) => (
          <ErrorBoundary key={i}>
            <Todo {...todo} toggleTodo={toggleTodo} />
          </ErrorBoundary>
      ))}
    </ul>
    );

    return (
      <div>
        <Header as="h2">
          <Icon name="list" />
          <Header.Content>
            Needs to be done:
            <Header.Subheader>
              {currentFilter}{routerFilter}
            </Header.Subheader>
          </Header.Content>
        </Header>

        {todosListed}

        <Button.Group>
          <FilterLink filter={SHOW_ALL}>Show all</FilterLink>
          <FilterLink filter={SHOW_DONE}>Show done</FilterLink>
          <FilterLink filter={SHOW_UNDONE}>Show undone</FilterLink>
        </Button.Group>

        <form onSubmit={ this.handleSubmit }>
          <Input action="Add" onChange={ e => this.setState({ inputVal: e.target.value }) } value={this.state.inputVal} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  currentFilter: state.visibilityFilter,
  routerFilter: ownProps.match.params.filter
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, changeFilter }
)(TodoList);
