import React, { Component } from 'react';
import TvCard from "../components/TvCard"
import Bookmarks from "./Bookmarks"

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
      <div>
        <h1>search by keyword</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="search" value={this.state.search} onChange={this.changeStateHandler}/>
          <input type="submit"/>
        </form>
        <h1>Hello From Search</h1>
        {
          shows.map(show =>{
            return <TvCard key={show.id} show={show} bookmarkHandler={this.props.bookmarkHandler}  />
          })
        }

      </div>
    );
  }

}

export default Search;
