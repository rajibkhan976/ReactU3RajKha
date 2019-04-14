import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';
import house from '../../hus.jpg';

//this class visualizes the name of a single user
class UserScreenComponent extends Component {

 constructor (props) {
   super (props);
   //assigning the user name received as the parameter
   this.state = ({
     userInfo: [],
     userAddress: [],
     error: '',
     showAddress: false
   });
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

 toggleAddressInfo = (e) => {
   this.setState({showAddress: !this.state.showAddress});
 }

 render () {
   let message = 'No user selected!';
   if (this.props.match.params.id !== undefined) {
     return (
       <div className={styles.cardOne}>
          <img className="img-fluid" src={house} alt="house" />
          <h4>User name: {(this.state.userInfo === undefined) ? this.state.error : this.state.userInfo.username}</h4>
          <p>Name: {(this.state.userInfo === undefined) ? this.state.error : this.state.userInfo.name}</p>
          <p>Email: {(this.state.userInfo === undefined) ? this.state.error : this.state.userInfo.email}</p>
          {this.state.showAddress ?
            <div>
            <p>City: {this.state.userAddress.city}</p>
            <p>Street: {this.state.userAddress.street}</p>
            <p>Suite: {this.state.userAddress.suite}</p>
            </div>
            : null
          }
          <button type="button" className="btn btn-primary" onClick={this.toggleAddressInfo}>Show Address</button>
       </div>
     );
   } else {
     return (
       <div className={styles.cardOne}>
        <h4>{message}</h4>
       </div>
     );
   }
 }
}

export default UserScreenComponent;
