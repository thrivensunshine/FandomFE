import React, { Component } from 'react';
import User from "../components/User"

class UserHomepage extends Component {




  render() {
    return (
      <div>
        <img src={this.props.currentUser["avatar"]} alt={this.props.currentUser["name"]} height="300" width="300" />
        <h1>{this.props.currentUser["name"]}</h1>

      </div>
    );
  }

}

export default UserHomepage;
