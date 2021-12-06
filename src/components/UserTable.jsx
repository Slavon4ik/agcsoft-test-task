import React from 'react';
import UserTableHat from './UserTableHat.jsx';
import UserTableRow from './UserTableRow.jsx';
import '../styles/UserTable.scss';
import AppButton from './AppButton.jsx';
import IconClose from '../assets/icons/close.svg';

const UserTable = ({ userList = [], remove, update, copy }) => {
  return (
    <div className="user-table">
      <div className="user-table__actions">
        <AppButton size="small" onClick={() => copy()}>
          Copy table
        </AppButton>
        <img src={IconClose} alt="Close icon"/>
      </div>
      <UserTableHat />
      {userList.map(user =>
        <UserTableRow
          user={user}
          key={user.id}
          remove={remove}
          update={update}
        />
      )}
    </div>
  );
};

export default UserTable;