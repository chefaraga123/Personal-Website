import React, { useState } from 'react';
import './ToggleSection.module.css'; // Your CSS file for styling

const ToggleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="toggle-section">
      <button onClick={toggleOpen} className="toggle-button">
        {title}
      </button>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
};

export default ToggleSection;
