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
    console.log(this.state.bookmarked)
    console.log(this.state.currentUser)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Splash currentUserHandler={this.currentUserHandler} />
          <UserHomepage currentUser={this.state.currentUser} />
          <Search getShows={this.getShows}
            allShows={this.state.allShows}
            bookmarkHandler={this.bookmarkHandler}
            />
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

  // isAlreadyAdded = (id) => {
  //   // return true or false if id is inside the state of bookmarked
  // }

  bookmarkHandler = (show) =>{
// if (this.isAlreadyAdded(show.id)){
//   alert("You Have Already Bookmarked, This Calmn Down!")
// } else{
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
    // }
    }







  } //end of class

  export default App;
