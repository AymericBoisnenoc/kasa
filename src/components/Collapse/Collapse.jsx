import React, { useState, useRef, useEffect } from 'react';
import vectorUp from '../../assets/img/vector-up.svg';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isOpen]);

  return (
    <div className='collapse'>
      <button onClick={toggle} className='collapse-button'>
        {title}
        <img src={vectorUp} alt='' className={isOpen ? 'rotate' : ''} />
      </button>
      <div
        ref={contentRef}
        className={`collapse-content ${isOpen ? 'open' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;

