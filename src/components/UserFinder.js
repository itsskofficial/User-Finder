import { Fragment, useState, useEffect } from 'react';
import { Component } from 'react/cjs/react.development';

import Users from './Users';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
]
class UserFinder extends Component{
    constructor() {
        this.state = {
            filteredUsers:DUMMY_USERS,
            searchTerm:''
        }
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm:event.target.value
        })
    }
}

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

};

export default UserFinder;