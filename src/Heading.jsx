import React, { useState, useEffect } from 'react';

function Heading(props) {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(getRandomColor());
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange','brown','black'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <>
    <h1 className='Heading-1' style={{ color}}>{props.h1}</h1>
    <h2 className='Heading-2' style={{ color}}>{props.h2}</h2>
    <h3 style={{ color }}>{props.h3}</h3>
    <h4 style={{ color }}>{props.h4}</h4>
    <h5 style={{ color }}>{props.h5}</h5>
    <h6 style={{ color }}>{props.h6}</h6>
    </>
  );
}
export default Heading