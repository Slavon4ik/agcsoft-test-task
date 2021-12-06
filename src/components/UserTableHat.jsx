import React from 'react';
import { USER_FIELD_LIST } from './settings.js';
import '../styles/UserTableHat.scss';
import { FIELD_PLACEHOLDERS } from '../hooks/fields/settings.js';

const UserTableHat = () => {
  return (
    <div className="user-table-hat">
      {USER_FIELD_LIST.map(field =>
        <div key={field} className="user-table-hat__item">
          {FIELD_PLACEHOLDERS[field]}
        </div>
      )}
    </div>
  );
};

export default UserTableHat;