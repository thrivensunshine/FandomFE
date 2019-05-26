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

  render(){
    return (
      <div onClick={this.clickHandler}>
      {this.state.clicked
      ?
      <div>
        <img src={this.props.show.thumbnail} alt={this.props.show.name}/>
        <h1>{this.props.show.name}</h1>
      </div>
      :
      <div>
        <img src={this.props.show.img_url} alt={this.props.show.name}/>


      </div>
    }
  </div>
    );
  }

}

export default TvCard;
