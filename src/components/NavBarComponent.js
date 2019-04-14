import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import LoginScreenComponent from './../screens/LoginScreen/LoginScreenComponent';
import DashboardScreenComponent from './../screens/DashboardScreen/DashboardScreenComponent';
import UserScreenComponent from './../screens/UserScreen/UserScreenComponent';

//this class manages the naviagtion and routing among the different pages
class NavBarComponent extends Component {
  render () {
    return (
      <Router>
        <div className="sideBar">
          <nav className="menu">
            <NavLink to="/" activeStyle={{color: 'pink'}}>Login</NavLink> <br/>
            <NavLink to="/dashboard" activeStyle={{color: 'pink'}}>Dashboard</NavLink> <br/>
            <NavLink to="/user" activeStyle={{color: 'pink'}}>User</NavLink>
          </nav>
            <Route path="/" exact component={LoginScreenComponent} />
            <Route path="/dashboard" component={DashboardScreenComponent} />
            <Switch>
              <Route path="/user/:id" component={UserScreenComponent} />
              <Route path="/user" component={LoginScreenComponent} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBarComponent;
