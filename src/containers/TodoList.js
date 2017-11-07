import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, changeFilter } from '../actions';
import Todo from '../components/Todo';
import ErrorBoundary from '../components/ErrorBoundary';
import FilterLink from '../components/FilterLink';
import { getVisibleTodos } from '../reducers';
import * as filterTypes from '../reducers/visibilityFilter';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
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
    if( this.inputRef.value !== '' ) {
      this.addTodo();
    }
  }

  render() {
    return (
      <div>
        <h2>Current filter: {this.props.currentFilter}</h2>
        <ul>
          { this.props.todos.map( (todo, i)  => (
          <ErrorBoundary key={i}>
            <Todo {...todo} toggleTodo={this.props.toggleTodo} />
          </ErrorBoundary>
        ))}
        </ul>

        <form onSubmit={ this.handleSubmit }>
          <input type="text" ref={ input => this.inputRef = input  } />
          <button>Add new</button>
        </form>
        <FilterLink filter={filterTypes.SHOW_ALL}>Show all</FilterLink>
        <FilterLink filter={filterTypes.SHOW_DONE}>Show done</FilterLink>
        <FilterLink filter={filterTypes.SHOW_UNDONE}>Show undone</FilterLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state),
  currentFilter: state.visibilityFilter
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, changeFilter }
)(TodoList);
