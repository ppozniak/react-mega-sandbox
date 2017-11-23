import React from 'react';
import { string, bool } from 'prop-types';

Todo.propTypes = {
  text: string.isRequired,
  done: bool.isRequired,
};

export default function Todo({ text, done = true, id, toggleTodo }) {
  const className = done ? 'done' : '';
  const validateIfNotVirus = text === 'virus' ? Error('AAAAA') : null;
  const handleClick = (e) => toggleTodo(id);
  return (
    <li className={className} 
        onClick={handleClick}>
      {text} {validateIfNotVirus}
    </li>
  );
}
