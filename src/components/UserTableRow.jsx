import React from 'react';
import '../styles/UserTableRow.scss';
import { USER_FIELD_LIST, USER_PLACEHOLDERS } from './settings.js';
import UserTableRowActions from './UserTableRowActions.jsx';

const UserTableRow = ({ user, remove, update }) => {
  return (
    <div className="user-table-row">
      {USER_FIELD_LIST.map(field =>
        <div key={field} className="user-table-row__item">
          <span className="user-table-row__item--mobile">
            {USER_PLACEHOLDERS[field]}:
          </span>
          <span>
            {user[field]}
          </span>
        </div>
      )}
      <div className="user-table-row__item">
        <UserTableRowActions
          userId={user.id}
          remove={remove}
          update={update}
        />
      </div>
    </div>
  );
};

export default UserTableRow;