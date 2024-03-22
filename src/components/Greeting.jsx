import React, { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const paragraph = document.getElementById('text');
  console.log(paragraph);

  const handleClick = () => {
    setChangedText(true);
  };

  return (
    <div>
      <p>Hello, User!</p>

      {changedText && <Output>it is good to see you</Output>}
      <Output>{changedText ? 'changed' : 'not changed'}</Output>

      <button onClick={handleClick}>Change Text</button>
    </div>
  );
};

export default Greeting;
