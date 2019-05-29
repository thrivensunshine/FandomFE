import React, { Component } from 'react';
import User from "../components/User"
import Navbar from '../components/Navbar'


import Favorite from '../components/Favorites'


class UserHomepage extends Component {

state={
clicked: false,
url: "",
avatarForm: false
}


clickHandler = () =>{
 this.props.currentUserBookmark()
 this.setState(prevState => ({
   clicked: !prevState.clicked
 }))
}


avatarFormChange = () =>{
  this.setState(prevState =>({
    avatarForm: !prevState.avatarForm
  }),() => console.log("hey there from form change"))
}

handleSubmit = (event) =>{
  event.preventDefault()
this.props.updateCurrentUser(this.state.url)
}

handleChange = (event) =>{
  this.setState({

[event.target.name]: event.target.value

},() => console.log(this.state.url))
}





  render() {

    return (
      <div>
        <Navbar changePage={this.props.changePage}/>
        <User currentUser={this.props.currentUser} />
        <button className="favbut" onClick={this.avatarFormChange}>Change My Avatar</button>
<div>
  {this.state.avatarForm ?
<form onSubmit={this.handleSubmit}>
  <input type="text" onChange={this.handleChange} value={this.state.url} name="url"/>
  <input type="submit"/>
</form>
:
null
}
</div>


        <button className="favbut" onClick={this.clickHandler}>{this.props.currentUser.name}'s Favorites!!</button>
          <br />
          <br />
          <div className="grid" >
            { this.state.clicked ?
            this.props.bookmarks.map(bmark =>{
            return  <Favorite key={bmark.id}  bmark={bmark} />

            })
              :
              null

            }
          </div>
        </div>
      );
    }

  }

  export default UserHomepage
