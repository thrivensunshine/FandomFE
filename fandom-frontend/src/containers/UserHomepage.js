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
        <User currentUser={this.props.currentUser} />
        <button onClick={() => {
            this.props.currentUserBookmark(this.props.currentUser)
          }}>Show my Favs!!</button>
          <div>
            {this.props.bookmarks.map(hey =>{
              console.log(hey)
            })}
          </div>
        </div>
      );
    }

  }//end of component

  export default UserHomepage;
