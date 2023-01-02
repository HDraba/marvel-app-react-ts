import React, { useState } from 'react';

const Greeting = () => {
  // type usf - give it a name and tab
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <h2>hello world</h2>
      <button onClick={clickHandler}>click me!</button>
      {isClicked && <h2>Blue!</h2>}
    </div>
  );
};

export default Greeting;
