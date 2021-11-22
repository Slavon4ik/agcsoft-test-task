import React from 'react';
import '../styles/AppButton.scss';
import { getClassModifiers } from '../web/helpers.js';

const AppButton = ({ children, ...props }) => {
  const modifiers = [];
  props.disabled && modifiers.push('disabled');
  const [classes] = getClassModifiers([{ className: 'app-button', modifiers }]);

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default AppButton;