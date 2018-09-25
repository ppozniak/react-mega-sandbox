import React from 'react';
import { string, bool, number, func } from 'prop-types';
import { List } from 'semantic-ui-react';

Todo.propTypes = {
  name: string.isRequired,
  description: string,
  done: bool.isRequired,
  id: number.isRequired,
  toggleTodo: func.isRequired,
};

export default function Todo({ name, description = null, done = false, id, toggleTodo, ...rest }) {
  const className = done ? 'done grey' : 'red';
  const handleClick = e => toggleTodo(id);
  return (
    <List.Item className={className} onClick={handleClick} {...rest}>
      <List.Content header={name} content={description} />
    </List.Item>
  );
}
