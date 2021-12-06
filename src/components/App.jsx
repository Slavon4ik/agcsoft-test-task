import React, { useState } from 'react';
import '../styles/App.scss';
import UserForm from './UserForm.jsx';
import UserTable from './UserTable.jsx';

function App() {
  const [userTableList, setUserTableList] = useState([
    {
      id: new Date().getTime(),
      isCopy: false,
      userList: [],
    }
  ]);

  const createUser = (user) => {
    setUserTableList(userTableList.map(table => {
      return table.isCopy ? table : { ...table, userList: [...table.userList, user] }
    }));
  };

  const copyTable = (table) => {
    setUserTableList([...userTableList, { ...table, id: new Date().getTime(), isCopy: true }]);
  };

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__action">
          <UserForm submit={createUser} />
        </div>
        <div className="app__table">
          {userTableList.map(table =>
            <UserTable
              key={table.id}
              userList={table.userList}
              copy={() => copyTable(table)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
