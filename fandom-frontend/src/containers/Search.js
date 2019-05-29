import React, { Component } from 'react';
import TvCard from "../components/TvCard"
// import Bookmarks from "./Bookmarks"
import Navbar from "../components/Navbar"
// import App from "../App"

class Search extends Component {

  state={
    search: ""
  }


  changeStateHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {this.props.getShows(this.state.search)})
  }

  submitHandler = (event) =>{
    event.preventDefault()
  }

  render() {
    let sortedShows = this.props.allShows.sort((a, b) => (a.name > b.name) ? 1 : -1)
    let shows = this.state.search === "" ? sortedShows : this.props.filteredArr
    return (
      <div >
        <Navbar changePage={this.props.changePage} />
        <div className="searchForm">

        <h1>search by keyword</h1>
        <form onSubmit={this.submitHandler}>
          <input className="searchbar" type="text" name="search" value={this.state.search} onChange={this.changeStateHandler}/>
          <input type="submit"/>
        </form>
        </div>
        <div className="grid">
        {shows.map(show =>{
            return <TvCard key={show.id} show={show} bookmarkHandler={this.props.bookmarkHandler} bookmarks={this.props.bookmarks}  />
          })
        }
        </div>

      </div>
    );
  }

}

export default Search;
