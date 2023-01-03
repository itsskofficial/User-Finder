import classes from './User.module.css';
import {Component}

class User extends Component{
  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }
}

export default User;
