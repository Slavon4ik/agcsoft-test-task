import React, { useState } from 'react';
import '../styles/App.scss';
import UserForm from './UserForm.jsx';
import { USER_DEFAULT } from './settings.js';
import UserTable from './UserTable.jsx';

function App() {
  const [user, setUser] = useState(USER_DEFAULT);
  const [userList, setUserList] = useState([]);

  const getUniqUser = () => ({
    ...user,
    id: new Date().getTime(),
  })

  const createUser = () => {
    setUserList([...userList, getUniqUser()]);
    setUser(USER_DEFAULT);
  };

  const editUser = () => {
    setUserList(userList.map(_user =>
      _user.id === user.id ? user : _user
    ));
    setUser(USER_DEFAULT);
  };

  const submitUser = () => {
    if (user.id) {
      editUser();
    } else {
      createUser();
    }
  };

  const updateUser = (userId) => {
    const user = userList.find(_user => _user.id === userId);

    if (!user) {
      return;
    }

    setUser(user);
  }

  const removeUser = (userId) => {
    setUserList(userList.filter(user => user.id !== userId));
  };

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__action">
          <UserForm user={user} update={setUser} submit={submitUser} />
        </div>
        <div className="app__table">
          <UserTable
            userList={userList}
            remove={removeUser}
            update={updateUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
