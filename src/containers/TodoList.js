import React, { Component } from 'react';
import { array, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, changeFilter } from '../actions';
import Todo from '../components/Todo';
import ErrorBoundary from '../components/ErrorBoundary';
import FilterLink from '../components/FilterLink';
import { getVisibleTodos } from '../reducers';
import * as filterTypes from '../reducers/visibilityFilter';

class TodoList extends Component {
  static propTypes = {
    todos: array.isRequired,
    currentFilter: string.isRequired,
    toggleTodo: func.isRequired
  }

  componentDidMount() {
    this.inputRef.focus();
  }

  addTodo = () => {
    this.props.addTodo( this.inputRef.value );
    this.inputRef.value = '';
    this.inputRef.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.inputRef.value !== '') {
      this.addTodo();
    }
  }

  render() {
    const {
      todos,
      toggleTodo,
      currentFilter,
      match,
      history,
      routerFilter
    } = this.props;

    const todosList = todos.map((todo, i) => (
      <ul> 
        <ErrorBoundary key={i}>
          <Todo {...todo} toggleTodo={toggleTodo} />
        </ErrorBoundary>
      </ul>
    ));
    return (
      <div>
        <h2>Current filter: {currentFilter} and from router {routerFilter}</h2>
        {todosList}

        <form onSubmit={ this.handleSubmit }>
          <input type="text" ref={input => this.inputRef = input} />
          <button>Add new</button>
        </form>
        <FilterLink filter={filterTypes.SHOW_ALL}>Show all</FilterLink>
        <FilterLink filter={filterTypes.SHOW_DONE}>Show done</FilterLink>
        <FilterLink filter={filterTypes.SHOW_UNDONE}>Show undone</FilterLink>

        <button onClick={ () => history.goBack() }>Go back</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state),
  currentFilter: state.visibilityFilter,
  routerFilter: ownProps.match.params.filter
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, changeFilter }
)(TodoList);
