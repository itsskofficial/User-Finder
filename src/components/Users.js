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
    this.setState((currState) => {
      return {showUsers:!currState.showUsers}
    })
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {showUsers ? 'Hide' : 'Show'} Users
        </button>
        {showUsers && usersList}
      </div>
    )
  }

}

 

  

  
};

export default Users;
