import React, { useState, useEffect } from 'react';

function Timer() {
  const [remainingTime, setRemainingTime] = useState(5);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

//   const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
     {seconds < 10 ? '0' : ''}{seconds}
    </div>
  );
}
export default Timer