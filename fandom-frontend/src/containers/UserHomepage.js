import React, { Component } from 'react';
import User from "../components/User"

class UserHomepage extends Component {

  render() {
    return (
      <div>
        <h1>Hello From UserHomepage</h1>
        <User />
      </div>
    );
  }

}

export default UserHomepage;
