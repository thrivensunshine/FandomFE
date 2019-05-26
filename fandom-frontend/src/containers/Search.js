import React, { Component } from 'react';
import TvCard from "../components/TvCard"
import Bookmarks from "./Bookmarks"

class Search extends Component {

  state={
    term: "",
    shows: []
  }


  changeStateHandler = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  submitHandler = (event) =>{
    event.preventDefault()
     this.getSearchResults()
  }

  getSearchResults=()=>{
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


        fetch("http://localhost:3000/api/v1/search", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
          },
          body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            shows: [...this.state.shows,data]
          })
        })


  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" name="term" value={this.state.term} onChange={this.changeStateHandler}/>
          <input type="submit"/>
        </form>
        <h1>Hello From Search</h1>
        <TvCard />
        
      </div>
    );
  }

}

export default Search;
