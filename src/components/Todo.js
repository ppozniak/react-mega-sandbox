import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, done, id, toggleTodo }) => (
  <li className={ done ? 'done' : '' } onClick={ () => toggleTodo(id) }>{text} { text === 'virus' ? Error('AAAAA') : null } </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

Todo.defaultProps = {
  done: true
}

export default Todo;