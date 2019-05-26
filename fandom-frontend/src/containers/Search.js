import React, { Component } from 'react';
import TvCard from "../components/TvCard"
import Bookmarks from "./Bookmarks"

class Search extends Component {

  state={
    search: "",
    shows: []

  }


  changeStateHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  submitHandler = (event) =>{
    event.preventDefault()

    fetch("http://localhost:3000/api/v1/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })


  }


    // return fetch("http://localhost3000/api/v1/search",{
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "app/json",
    //     "Accept": "app/json"
    //   },
    //   body: JSON.stringify(this.state)
    // }).then(response =>response.json())
    // .then(data =>{
    //
    // })




  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="search" value={this.state.search} onChange={this.changeStateHandler}/>
          <input type="submit"/>
        </form>
        <h1>Hello From Search</h1>
        <TvCard />

      </div>
    );
  }

}

export default Search;
