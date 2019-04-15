import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';
import house from '../../hus.jpg';
import extractUserDetails from '../../HOC/UserScreenHoc';

//this class visualizes the name of a single user
class UserScreenComponent extends Component {

 constructor (props) {
   super (props);
   //assigning the user name received as the parameter
   this.state = ({
     showAddress: false
   });
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
          <h4>User name: {(this.props.singleUserInfo === undefined) ? this.props.errorText : this.props.singleUserInfo.username}</h4>
          <p>Name: {(this.props.singleUserInfo === undefined) ? this.props.errorText : this.props.singleUserInfo.name}</p>
          <p>Email: {(this.props.singleUserInfo === undefined) ? this.props.errorText : this.props.singleUserInfo.email}</p>
          {this.state.showAddress ?
            <div>
            <p>City: {this.props.singleUserAddress.city}</p>
            <p>Street: {this.props.singleUserAddress.street}</p>
            <p>Suite: {this.props.singleUserAddress.suite}</p>
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

export default extractUserDetails(UserScreenComponent);
