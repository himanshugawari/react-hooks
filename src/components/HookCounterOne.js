import React, { useEffect, useState } from 'react';

const HookCounterOne = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setcount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default HookCounterOne;
