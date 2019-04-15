import React, { Component } from 'react';

export default function extractUserList (WrappedComponent, selectData) {

  return class extends Component {
    constructor (props) {
      super (props);
      this.state = {
        error: null,
        users: []
      };
    }

    componentDidMount () {
      fetch("http://api.softhouse.rocks/users")
      .then((res) => res.json())
      .then((userList) => {
        this.setState({
          users: userList
        });
      })
      .catch((err) => {
        this.setState({
          error: err
        })
      })
    }

    render () {
      return (
        <WrappedComponent userData={this.state.users} errorText={this.state.error} {...this.props} />
      );
    }
  }
}
