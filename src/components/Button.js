import React from 'react';
import '../assets/styles/style.scss';

const ButtonComp = ({ onClick, btnColor, type, children }) => {
  return (
    <>
      <button className={'btn ' + btnColor} onClick={onClick} type={type}>
        {children}
      </button>
    </>
  );
};

export default ButtonComp;
