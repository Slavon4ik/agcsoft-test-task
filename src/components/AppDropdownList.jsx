import React from 'react';
import '../styles/AppDropdownList.scss';

const AppDropdownList = ({ options, select }) => {
  return (
    <div className="app-dropdown-list">
      {options.map(option =>
        <div
          key={option}
          className="app-dropdown-list__item"
          onClick={() => select(option)}
        >
          {option}
        </div>
      )}
    </div>
  );
};

export default AppDropdownList;