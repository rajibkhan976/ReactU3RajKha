import React, { Component } from 'react';
import CardComponent from '../../components/CardComponent';
import { Redirect } from 'react-router-dom'

/* This class handles the login functionalities*/
class LoginScreenComponent extends Component {

  constructor (props) {
    super (props);
    //definition of login status and error message
    this.state = {logInStatus: false};
  }
  //method for hadling login input
  handleLoginCredential = (e) => {
    this.loginCredential = e.target.value;
  }
  //method for checking login status
  logInChecker = (e) => {
    if (this.loginCredential === undefined) {
      this.setState({logInStatus: false});
    } else {
      this.setState({logInStatus: true});
    }
  }
 //rendering the login form or the dashboard component in case login status is true
  render () {
    if (this.state.logInStatus) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <CardComponent info='You need to click on the button to login:)'>
        <div className="jumbotron">
          <input className="form-control" type="text" onChange={this.handleLoginCredential}/> <br/>
          <button type="button" className="btn btn-success" onClick={this.logInChecker}>Login</button>
        </div>
      </CardComponent>
    );
  }
}

export default LoginScreenComponent;
