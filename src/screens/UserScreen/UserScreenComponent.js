import React, { Component } from 'react';
import styles from '../../components/WrapperComponentCSS.module.css';
import PropTypes from 'prop-types';

//this class visualizes the name of a single user
class UserScreenComponent extends Component {
 constructor (props) {
   super (props);
 }

 render () {
   //assigning the user name received as the parameter
   let userName = this.props.match.params.id;
   return (
     <div className={styles.cardOne}>
      <h4>Selected user: <span>{(userName === undefined) ? "No user selected!" : userName}</span> </h4>
     </div>
   );
 }
}
//defining the propTypes for the parameter received
UserScreenComponent.propTypes = {
  id: PropTypes.string
};

export default UserScreenComponent;
