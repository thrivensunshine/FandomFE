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
  bookmarked:[]
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




  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Search getShows={this.getShows} allShows={this.state.allShows} bookmarkHandler={this.bookmarkHandler} />
          <Splash />
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

    fetch("http://localhost:3000/api/v1/new",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(show.id)
    }).then (response =>response.json())

} //end of class

export default App;
