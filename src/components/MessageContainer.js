import React from 'react';

export default function MessageContainer({children}) {
  let inputRef = null;

  const clearInput = () => inputRef.value = '';
  const boundInput = (input) => inputRef = input;

  return (
    <div>
      <strong>{children}</strong>
      <div>
        <input defaultValue="no siemanko" type="text" ref={boundInput} />
        <button onClick={clearInput}>Clear that input</button>
      </div>
    </div>
  );
};