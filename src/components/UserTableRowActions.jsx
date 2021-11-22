import React from 'react';
import '../styles/UserTableRowActions.scss';

const UserTableRowActions = ({ userId, remove, update }) => {
  return (
    <div className="user-table-row-actions">
      <div
        className="user-table-row-actions__edit"
        onClick={() => update(userId)}
      >
        Edit
      </div>
      <div
        className="user-table-row-actions__remove"
        onClick={() => remove(userId)}
      >
        Delete
      </div>
    </div>
  );
};

export default UserTableRowActions;