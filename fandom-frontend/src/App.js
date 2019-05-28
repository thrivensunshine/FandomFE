import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./containers/Search"
import Splash from "./containers/Splash"
import UserHomepage from "./containers/UserHomepage"
// import Navbar from "./components/Navbar"

class App extends React.Component {



state ={
  allShows: [],
  bookmarked: [],
  currentUser: [],
  page: "splash"
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
//----------------------
getShows = (data) =>{
  this.setState({
    allShows: data
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

changePage = (newPage) => {
  if (this.state.page !== newPage){
    this.setState({page: newPage})
  }
  console.log(this.state.page)
}

renderPage(){
switch(this.state.page){

  case "splash":
      return  <Splash currentUserHandler={this.currentUserHandler} />
  case "search":
    return <Search getShows={this.getShows}
      allShows={this.state.allShows}
       bookmarkHandler={this.bookmarkHandler}
       changePage={this.changePage}
       page={this.state.page}
      />
    case "userHome":
    return <UserHomepage page={this.state.page} changePage={this.changePage} user={this.state.currentUser} />

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
  .then(bookmark=>{
    this.setState({
      bookmarked: [bookmark, ...this.state.bookmarked]
    })
  })

}







} //end of class

export default App;



// _______________________________________________
//
//
// <Search getShows={this.getShows}
//   allShows={this.state.allShows}
//   bookmarkHandler={this.bookmarkHandler}
//   />
//
// <UserHomepage />
// <Navbar />
//
