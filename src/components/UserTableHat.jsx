import React from 'react';
import { USER_FIELD_LIST, USER_PLACEHOLDERS } from './settings.js';
import '../styles/UserTableHat.scss';

const UserTableHat = () => {
  return (
    <div className="user-table-hat">
      {USER_FIELD_LIST.map(field =>
        <div key={field} className="user-table-hat__item">
          {USER_PLACEHOLDERS[field]}
        </div>
      )}
    </div>
  );
};

export default UserTableHat;