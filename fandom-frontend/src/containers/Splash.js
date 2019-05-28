import React, { Component } from 'react';


import App from '../App.css';
import Search from "../containers/Search"

import UserHomepage from "../containers/UserHomepage"
import Navbar from "../components/Navbar"


class Splash extends Component {



state={
name: "",
avatar: "",
}


handleChange = (event) =>{
this.setState({
  [event.target.name]: event.target.value
})
}

handleSubmit = (event) =>{
event.preventDefault()
this.props.currentUserHandler(this.state)

}

changePage = (newPage) => {
  if (this.state.page !== newPage){
    this.setState({page: newPage})
  }
  console.log(this.state.page)
}




  render() {
    console.log(this.state)
    return (
      <div className="splash">

        <img className="splashimage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png" alt="" />
        <div className="signin">
        <form className="form" onSubmit={this.handleSubmit}
         className="form">
          <h3>name</h3>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          <h3>avatar url</h3>
          <input type="text" value={this.state.avatar} name="avatar" onChange={this.handleChange}/>
          <input type="submit"
          />
        </form>
        </div>

    </div>
    );
  }

}

export default Splash;









// _______________________
// renderPageAgain(){
// switch(this.state.page){
//
//   case "search":
//     return <Search getShows={this.getShows}
//       allShows={this.state.allShows}
//        bookmarkHandler={this.bookmarkHandler}
//       />
//     case "Userhome":
//     return <UserHomepage />
//
//   default:
//     return <UserHomepage />
// }
// }
