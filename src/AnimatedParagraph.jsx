import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

function AnimatedParagraph({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {isVisible && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(text)
              .start();
          }}
        />
      )}
    </div>
  );
}

AnimatedParagraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AnimatedParagraph;
