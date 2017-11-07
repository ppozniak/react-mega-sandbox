import React from 'react';

const MessageContainer = (props) => {
  let inputRef = null;

  function clearInput() {
    inputRef.value = '';
  }

  return (
    <div>
      <strong>{props.children}</strong>

      <div>
        <input defaultValue="no siemanko" type="text" ref={ input => inputRef = input } />
        <button onClick={clearInput}>Clear that lol</button>
      </div>
    </div>
  );
};

export default MessageContainer;
