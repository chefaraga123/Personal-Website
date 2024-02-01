import React, { useState } from 'react';
import './Dropdown.module.css'; // Import your CSS file

const Dropdown = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className="dropdown">
      <option value="">Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      {/* Add more options here */}
    </select>
  );
};

export default Dropdown;
