import React, { Component } from 'react';
// import TvDetailsCard from "./TvDetailsCard"

class TvCard extends Component {


state={
  clicked:true
}


clickHandler = () =>{
  this.setState(prevState=>({
    clicked: !prevState.clicked
  }))
}


bookmark = () =>{
  console.log("hello")
}

comments = () =>{
  console.log("byeeeee")
}

  render(){
  
    return (
      <div onClick={this.clickHandler}>
      {this.state.clicked
      ?
      <div>
        <h1>{this.props.show.name}</h1>
        <img src={this.props.show.thumbnail} alt={this.props.show.name}/>
      </div>
      :
      <div>
        <img src={this.props.show.img_url} alt={this.props.show.name} width="500" height="600"/>
  <button className="userButton" onClick={this.bookmark}>Bookmark</button>
  <button className="userButton" onClick={this.comments}>Comments</button>
      </div>
    }
  </div>
    );
  }

}

export default TvCard;
