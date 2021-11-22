import React from 'react';
import '../styles/AppInput.scss';

const AppInput = ({ input, value, ...props }) => {
  return (
    <input
      {...props}
      value={value}
      className="app-input"
      onInput={e => input(e.target.value)}
    />
  );
};

export default AppInput;