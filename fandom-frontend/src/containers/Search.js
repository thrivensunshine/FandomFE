import React, { Component } from 'react';
import TvCard from "../components/TvCard"
import Bookmarks from "./Bookmarks"

class Search extends Component {

  render() {
    return (
      <div>
        <h1>Hello From Search</h1>
        <TvCard />
        <Bookmarks />
      </div>
    );
  }

}

export default Search;
