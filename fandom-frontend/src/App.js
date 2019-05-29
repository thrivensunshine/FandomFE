import React from 'react';

import './App.css';
import Search from "./containers/Search"
import Splash from "./containers/Splash"
import UserHomepage from "./containers/UserHomepage"


class App extends React.Component {



   state ={
    allShows: [],
    bookmarked: [],
    currentUser: [],
    page: "splash",
    bookmarks: [],
    filteredArr: [],
    showFav: false
  }



  componentDidMount() {
    this.fetchShows()
  }


  fetchShows = () =>{
    return fetch("http://localhost:3000/api/v1/shows")
    .then(response => response.json())
    .then(shows =>{
      this.setState({
        allShows: shows
      })
    })
  }

  getShows = (searchTerm) =>{

    let allShowsCopy = [...this.state.allShows]
    let allShowsFiltered = allShowsCopy.filter(show =>{
      return  show.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    if (allShowsFiltered.length === 0){
      alert("No Search Results!")
    } else {
      this.setState({
        filteredArr: allShowsFiltered
      })
    }


  }

  updateCurrentUser = (newAvatar) =>{
    let userID = this.state.currentUser.id
    let user = this.state.currentUser


    fetch(`http://localhost:3000/api/v1/users/${userID}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({newAvatar})
    }).then(response => response.json())
    let updateUser = {id: user.id, name: user.name, avatar: newAvatar}
    this.setState({

      currentUser: updateUser

    })

  }

  currentUserHandler = (user) =>{
    fetch("http://localhost:3000/api/v1/users/new",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(user)
    }).then (response =>response.json())
    .then(user =>{
      this.setState({
        currentUser: user,
        page:"userHome"
      })
    })
  }

  currentUserBookmark = () => {
let user = this.state.currentUser
console.log(user)
    fetch("http://localhost:3000/api/v1/bookmarks/getit",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(user)
    }).then (response =>response.json())
    .then (bmarks =>{
      this.setState({
        bookmarks: bmarks
      })
    })
  }








  changePage = (newPage) => {
  if (this.state.page !== newPage){
    this.setState({page: newPage})
  }

}

renderPage(){
switch(this.state.page){

  case "splash":
      return  <Splash currentUserHandler={this.currentUserHandler} />
  case "search":
    return <Search getShows={this.getShows}
      allShows={this.state.allShows}
      filteredArr={this.state.filteredArr}
       bookmarkHandler={this.bookmarkHandler}
       fetchShows={this.fetchShows}
       changePage={this.changePage}
       page={this.state.page}
       bookmarks={this.state.bookmarks}
      />
    case "userHome":
    return <UserHomepage page={this.state.page}
        changePage={this.changePage}
        currentUser={this.state.currentUser}
        currentUserBookmark={this.currentUserBookmark}
        bookmarks={this.state.bookmarks}
        updateCurrentUser={this.updateCurrentUser} />

  default:
    return <Splash />
}
}

render(){

  return (
    <div>
        {this.renderPage()}
    </div>
  );
}



  bookmarkHandler = (show) =>{

    fetch("http://localhost:3000/api/v1/bookmarks/new",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        show: show.id,
        user: this.state.currentUser.id})
      }).then (response =>response.json())
      .then(bookmark =>{
        this.setState({
          bookmarked: [bookmark,...this.state.bookmarked]
        })
      })

    }







  } //end of class

  export default App;
