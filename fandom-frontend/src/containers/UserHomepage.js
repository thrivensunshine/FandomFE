import React, { Component } from 'react';
import User from "../components/User"
import Navbar from '../components/Navbar'
import TvCard from '../components/TvCard'

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
          <button onClick={() => {

            this.props.currentUserBookmark(this.props.currentUser)
            console.log(this.props.bookmarks)
          }}>Show my Favs!!</button>
      <div className="grid">
        {this.props.bookmarks.map(hey =>{
        return (
          <div >
          <h3>{hey.name}</h3>
          <img style={{height:300, width:200}}src={hey.img_url} alt="" />

          <a href={hey.official_site} target="_blank">{hey.name}official website</a>

          </div>

        )
          console.log(hey, "THIS IS HEY")
        })}
      </div>
      </div>
    );
  }

}

export default UserHomepage;
