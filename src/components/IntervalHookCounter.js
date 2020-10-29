import React, { useEffect, useState } from 'react';

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCount(count + 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  return (
    <div>
      <strong>Hooks - {count}</strong>
    </div>
  );
};

export default IntervalHookCounter;
