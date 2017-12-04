import React from 'react';
import PropTypes from 'prop-types';
import { List, Transition, Dimmer } from 'semantic-ui-react';
import Todo from './Todo';


TodosList.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default function TodosList({todos, toggleTodo}) {
  return (
    <div>
    <Transition visible={ todos.length === 0}>
      <Dimmer active={todos.length === 0}>No todos to show! Add new one or change filters</Dimmer> 
    </Transition>

      <Transition.Group
        as={List}
        divided
        size="huge"
        duration={200}
        animation="slide right">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))}
      </Transition.Group>
    </div>
  );
}