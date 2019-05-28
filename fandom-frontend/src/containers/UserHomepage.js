import React, { Component } from 'react';
import User from "../components/User"
import Navbar from '../components/Navbar'

class UserHomepage extends Component {

  state = {
    page: "userHome"
  }

  render() {
    return (
      <div>
        <Navbar changePage={this.props.changePage}/>
        <h1>Hello From UserHomepage</h1>
        <User />
      </div>
    );
  }

}

export default UserHomepage;
