import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggle}>
        {title}
      </button>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;
