import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./containers/Search"
import Splash from "./containers/Splash"
import UserHomepage from "./containers/UserHomepage"
import Navbar from "./components/Navbar"

class App extends React.Component {



state ={
  allShows: [],
  bookmarked: [],
  currentUser: []
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
      currentUser: user
    })
  })
}


  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Splash currentUserHandler={this.currentUserHandler} />
          <Search getShows={this.getShows}
            allShows={this.state.allShows}
            bookmarkHandler={this.bookmarkHandler}
            />
          <UserHomepage />
          <Navbar />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
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


//   this.setState(prevState => {
// return {
//   bookmarked: [show, ...prevState.bookmarked]
// }
//
//   })

}







} //end of class

export default App;
