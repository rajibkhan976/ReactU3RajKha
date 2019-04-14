import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardComponent from './CardComponent';

/* UserComponent shows the user list and also toggle the text color based on the props it received from the DashboardComponent*/
class UserComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {toggleUserStatus: true};
  }
  //method for toggling user list based on user status
  userStatus = (e) => {
    this.setState({toggleUserStatus: !this.state.toggleUserStatus});
  }

  //rendering the userlist and toggling the textColor
  render () {
    let users = this.props.users;
    return (
          <ul className="list-group">
            {users.map((user) => {
              return <Link to={`/user/${user.name}`} key={user.id}>
                  <li className="list-group-item" style={{color: this.props.textColor}} key={user.id}>{user.name}</li>
                  </Link>
                }
            )}
              <br/>
              <button type="button" className="btn btn-info" onClick={this.props.toggleTextColor}>Toggle Colors</button>
          </ul>
    );
  }
}
//defining prop types for the props users
UserComponent.propTypes = {
  users: PropTypes.object.isRequired
};

export default UserComponent;
