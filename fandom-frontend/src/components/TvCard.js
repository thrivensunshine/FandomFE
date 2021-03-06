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


  bookmarkButton = (show) =>{
    this.props.bookmarkHandler(show)
}


  render(){

    return (
      <div>
        {this.state.clicked
          ?
          <div onClick={this.clickHandler}>
            <h1>{this.props.show.name}</h1>
            <img src={this.props.show.thumbnail} alt={this.props.show.name}/>
          </div>
  :
          <div>
            <div onClick={this.clickHandler}>
              <img src={this.props.show.img_url} alt={this.props.show.name} width="500" height="600"/>
            </div>
            <button className="userButton" onClick={() => this.bookmarkButton(this.props.show)}>Bookmark <span role="img">📺 </span></button>
          </div>
        }
    </div>
    );
  }

}

export default TvCard;





// import React, { Component } from 'react';
// // import TvDetailsCard from "./TvDetailsCard"
//
// class TvCard extends Component {
//
//
//   state={
//     clicked:true
//   }
//
//
//   clickHandler = () =>{
//     this.setState(prevState=>({
//       clicked: !prevState.clicked
//     }))
//   }
//
//
//   bookmarkButton = (show) =>{
//
//     this.props.bookmarkHandler(show)
// }
//
//
//   render(){
//
//     return (
//       <div>
//         {this.state.clicked
//           ?
//           <div onClick={this.clickHandler}>
//             <h1>{this.props.show.name}</h1>
//             <img src={this.props.show.thumbnail} alt={this.props.show.name}/>
//           </div>
//           :
//           <div>
//             <div onClick={this.clickHandler}>
//               <img src={this.props.show.img_url} alt={this.props.show.name} width="500" height="600"/>
//             </div>
//             <button className="userButton" onClick={() => this.bookmarkButton(this.props.show)}>Bookmark</button>
//           </div>
//         }
//       </div>
//     );
//   }
//
// }
//
// export default TvCard;
