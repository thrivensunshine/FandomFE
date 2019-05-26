import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./containers/Search"
import Splash from "./containers/Splash"
import UserHomepage from "./containers/UserHomepage"
import Navbar from "./components/Navbar"

class App extends React.Component {








  render(){
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <Search changeStateHandler={this.changeStateHandler} />
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



} //end of class

export default App;
