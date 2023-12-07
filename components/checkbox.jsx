import React, { useState } from 'react';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="w-4 h-4 border rounded-md focus:outline-none "
        checked={isChecked}
        onChange={toggleCheckbox}
      />
    </div>
  );
};

export default Checkbox;
