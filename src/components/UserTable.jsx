import React from 'react';
import UserTableHat from './UserTableHat.jsx';
import UserTableRow from './UserTableRow.jsx';

const UserTable = ({ userList = [], remove, update }) => {
  return (
    <div>
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