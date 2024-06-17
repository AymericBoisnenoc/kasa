import React, { useState } from 'react';
import vectorUp from '../../assets/img/vector-up.svg';


const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse'>
      <button onClick={toggle} className='collapse-button'>
        {title} 
        <img src={vectorUp} alt='' className={isOpen ? 'rotate' : ''} />
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
