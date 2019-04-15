import React, { Component } from 'react';

export default function extractUserDetails (WrappedComponent, selectData) {

  return class extends Component {
    constructor (props) {
      super (props);
      this.state = {
        userInfo: [],
        userAddress: [],
        error: null
      };
    }

    componentDidMount () {
      fetch("http://api.softhouse.rocks/users/" + this.props.match.params.id)
      .then((res) => res.json())
      .then((userDetails) => {
        this.setState({
          userInfo: userDetails,
          userAddress: userDetails.address
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
        <WrappedComponent singleUserInfo={this.state.userInfo} singleUserAddress={this.state.userAddress} errorText={this.state.error} {...this.props} />
      );
    }
  }
}
