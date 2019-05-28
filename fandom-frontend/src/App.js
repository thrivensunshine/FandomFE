import React from 'react';
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
    filteredArr: [],
    page: "splash",
    bookmarks: []
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

  currentUserBookmark = (user) => {
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

  //
  // applyFilter = (searchTerm) => {
  //   return this.state.allShows.filter(show => {
  //     return show.name.toLowerCase().includes(searchTerm)
  //   })
  // }



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
      return <Search
        getShows={this.getShows}
        filteredArr={this.state.filteredArr}
        allShows={this.state.allShows}
        bookmarkHandler={this.bookmarkHandler}
        changePage={this.changePage}
        page={this.state.page}
        fetchShows={this.fetchShows}
        />
      case "userHome":
      return <UserHomepage page={this.state.page}
        changePage={this.changePage}
        currentUser={this.state.currentUser}
        currentUserBookmark={this.currentUserBookmark}
        bookmarks={this.state.bookmarks} />

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
