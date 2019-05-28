import React, { Component } from 'react';
import User from "../components/User"
import Navbar from '../components/Navbar'
import FavoritesCard from '../components/FavoritesCard'

class UserHomepage extends Component {



  render() {
    console.log(this.props.bookmarks)
    return (
      <div>
        <Navbar changePage={this.props.changePage} />
        <User currentUser={this.props.currentUser} />
       {this.props.bookmarks.length === 0 ? null :
          <button onClick={() => {
            this.props.currentUserBookmark(this.props.currentUser)
          }}> Show my Favs!! </button>}
      {this.props.bookmarks.map(bmk =>{
        return <FavoritesCard key={bmk.id} bookmark={bmk} />
      })}

  </div>
    );
  }

}

export default UserHomepage
