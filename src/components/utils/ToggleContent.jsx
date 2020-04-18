import React, { useState } from 'react';

const ToggleContent = ({ toggler, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <>
      {toggler(show)}
      {isVisible && content(hide)}
    </>
  );
};

export default ToggleContent;
