import React, { Component } from 'react';
import User from "../components/User"
import Navbar from '../components/Navbar'


import Favorite from '../components/Favorites'


class UserHomepage extends Component {

state={

clicked: false

}


clickHandler = () =>{
 this.props.currentUserBookmark()
 this.setState(prevState => ({
   clicked: !prevState.clicked
 }))

}

  render() {

    return (
      <div>
        <Navbar changePage={this.props.changePage}/>
        <User currentUser={this.props.currentUser} />
        <button className="favbut" onClick={this.clickHandler}>{this.props.currentUser.name}'s Favorites!!</button>
          <br />
          <br />
          <div className="grid" >
            { this.state.clicked ?
            this.props.bookmarks.map(bmark =>{
              return  <div className="favs">
                  <Favorite key={bmark.id} bmark={bmark} />
                </div>})
              :
              null

            }
          </div>
        </div>
      );
    }

  }

  export default UserHomepage
