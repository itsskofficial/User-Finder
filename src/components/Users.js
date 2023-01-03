import { useState } from 'react';
import { Component } from 'react/cjs/react.production.min';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component{
  constructor() {
    this.state = {
      showUsers:true
    }
  }

  toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

}

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

 

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
