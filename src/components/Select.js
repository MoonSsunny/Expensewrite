import React from 'react';
import '../assets/styles/style.scss';

const SelectComp = ({ label, name, className, selectGroup, onChange }) => {
  const elements = selectGroup.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  const handleChange = e => {
    if (onChange) onChange(e);
  };
  return (
    <>
      <div className="select-group">
        <label>{label}</label>
        <select name={name} className={className} onChange={handleChange}>
          {elements}
        </select>
      </div>
    </>
  );
};

export default SelectComp;
