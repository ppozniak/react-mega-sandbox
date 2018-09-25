import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { addTodo, toggleTodo, changeFilter, getVisibleTodos } from './reducer';
import TodosList from './TodosList';
import AddTodoForm from './AddTodoForm';
import TodosFilters from './TodosFilters';
import TodosHeader from './TodosHeader';

class TodosContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    currentFilter: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    currentId: PropTypes.number.isRequired,
  };

  addTodo = (name, description) => {
    this.props.addTodo(name, description, this.props.currentId);
  };

  currentFilterReadable = () => {
    switch (this.props.currentFilter) {
      case 'SHOW_ALL':
        return 'showing all';
      case 'SHOW_DONE':
        return 'showing done';
      case 'SHOW_UNDONE':
        return 'showing NOT done';
      default:
        return 'all';
    }
  };

  render() {
    const { todos, toggleTodo } = this.props;

    return (
      <div>
        <TodosHeader />
        <Divider hidden />
        <Grid>
          <Grid.Row divided as={Segment}>
            <Grid.Column mobile={16} tablet={3} computer={3}>
              <Header>
                Filter
                <Header.Subheader>Currently {this.currentFilterReadable()}</Header.Subheader>
              </Header>
              <TodosFilters />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={13} computer={13}>
              <Header>Todos</Header>
              <TodosList todos={todos} toggleTodo={toggleTodo} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row as={Segment}>
            <Grid.Column>
              <AddTodoForm addTodo={this.addTodo} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  state => ({
    todos: getVisibleTodos(state),
    currentId: state.todos.currentId,
    currentFilter: state.todos.visibilityFilter,
    // routerFilter: ownProps.match.params.filter
  }),
  { addTodo, toggleTodo, changeFilter }
)(TodosContainer);
