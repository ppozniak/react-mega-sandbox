import React, { Component } from 'react';
import { array, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, changeFilter } from '../actions';
import { Grid, Segment, Header, Divider } from 'semantic-ui-react';
import { getVisibleTodos } from '../selectors';
import TodosList from '../components/TodosList';
import AddTodoForm from '../components/AddTodoForm';
import TodosFilters from '../components/TodosFilters';
import TodosHeader from '../components/TodosHeader';

class TodosContainer extends Component {
  static propTypes = {
    todos: array.isRequired,
    currentFilter: string.isRequired,
    toggleTodo: func.isRequired
  }

  addTodo = (name, description) => {
    this.props.addTodo( name, description, this.props.currentId );
  }

  currentFilterReadable = () => {
    switch(this.props.currentFilter) {
      case "SHOW_ALL":
        return 'showing all';
      case "SHOW_DONE":
        return 'showing done';
      case 'SHOW_UNDONE':
        return 'showing NOT done';
      default: 
        return 'all';
    }
  }

  render() {
    const {
      todos,
      toggleTodo,
    } = this.props;

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

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state),
  currentId: state.todos.currentId,
  currentFilter: state.todos.visibilityFilter,
  // routerFilter: ownProps.match.params.filter
});

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, changeFilter }
)(TodosContainer);
