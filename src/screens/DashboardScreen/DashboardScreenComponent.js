import React, { Component } from 'react';
import DashboardComponent from '../../components/DashboardComponent';

//This class renders the DashboardComponent
class DashboardScreenComponent extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <DashboardComponent/>
    );
  }
}

export default DashboardScreenComponent;
