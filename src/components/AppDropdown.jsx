import React, { useEffect, useRef, useState } from 'react';
import { getClassModifiers } from '../web/helpers.js';
import AppDropdownList from './AppDropdownList.jsx';
import Caret from '../assets/icons/caret.svg';
import '../styles/AppDropdown.scss'

const AppDropdown = ({ value, input, options = [], placeholder = '' }) => {
  const dropdown = useRef(null);
  const [focused, setFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setPlaceholderText(value ? value : placeholder);
    setActive(!!value);
  }, [value]);

  const modifiers = [];
  focused && modifiers.push('focused');
  active && modifiers.push('active');
  const classes = getClassModifiers({ className: 'app-dropdown', modifiers });

  const select = (option) => {
    input(option);
    dropdown.current.blur();
  }

  return (
    <div
      ref={dropdown}
      tabIndex="0"
      className={classes}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <div className="app-dropdown__area">
        <div className="app-dropdown__placeholder">
          {placeholderText}
        </div>
        <div className="app-dropdown__caret">
          <img src={Caret} alt="Caret"/>
        </div>
      </div>
      <div className="app-dropdown__list">
        <AppDropdownList options={options} select={select} />
      </div>
    </div>
  );
};

export default AppDropdown;