import React from 'react';
import '../styles/AppInput.scss';
import { getClassModifiers } from '../web/helpers.js';

const AppInput = ({
  value = '',
  error = false,
  input = () => {},
  focus = () => {},
  blur = () => {},
  ...props
}) => {
  const modifiers = [];
  error && modifiers.push('error');
  const classes = getClassModifiers({ className: 'app-input', modifiers });

  return (
    <input
      {...props}
      value={value}
      className={classes}
      onInput={e => input(e.target.value)}
      onFocus={() => focus()}
      onBlur={() => blur()}
    />
  );
};

export default AppInput;