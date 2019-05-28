import React, { Component } from 'react';
import TvCard from "../components/TvCard"
import Bookmarks from "./Bookmarks"

class Search extends Component {

  state={
    search: ""
  }


  changeStateHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  submitHandler = (event) =>{
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/search",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then (response =>response.json())
    .then(data =>{
      if (!data.error) {
        this.props.getShows(data)
      }
    })
  }
//--------------------------^^this is search bar stuff^^-------------------






  render() {
  // let copyArr = [...this.props.allShows]
  // let sortArr = copyArr.sort((a, b) => (a.name > b.name) ? 1 : -1)
  let sortedShows = this.props.allShows.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return (
      <div>
        <h1>search by keyword</h1>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="search" value={this.state.search} onChange={this.changeStateHandler}/>
          <input type="submit"/>
        </form>
        <h1>Hello From Search</h1>

        {sortedShows.map(show =>{
          return <TvCard key={show.id} show={show} bookmarkHandler={this.props.bookmarkHandler}  /> 
          })}

      </div>
    );
  }

}

export default Search;
