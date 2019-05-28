import React, { Component } from 'react';
import User from "../components/User"
import Navbar from '../components/Navbar'
// import TvCard from '../components/TvCard'
import Favorite from '../components/Favorites'

class UserHomepage extends Component {

  state = {
    page: "userHome"
  }

  render() {
console.log(this.props.bookmarks)


    return (


      <div>

        <Navbar changePage={this.props.changePage}/>

        <User currentUser={this.props.currentUser} />
          <button className="favbut" onClick={() => {
            this.props.currentUserBookmark(this.props.currentUser)
          }}>Show my Favs!!</button>
        <br />
        <br />
        <div className="grid" >
        {this.props.bookmarks.map(bmark =>{
        return (
          <div className="favs">
            <Favorite bmark={bmark} />

          </div>

        )
          
        })}
      </div>
      </div>
    );
  }

}

export default UserHomepage;
