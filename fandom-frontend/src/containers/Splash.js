import React, { Component } from 'react';

class Splash extends Component {



state={
name: "",
avatar: ""
}


changeHandler = () =>{
this.setState


}







  render() {
    return (
      <div>
        <form>
          <input onChange={this.changeHandler} name="name" placeholder="name"/>
          <input name="avatar" placeholder="avatar url"/>
          <input type="submit"/>
        </form>
      <h1>Hello From Splash</h1>
    </div>
    );
  }

}

export default Splash;
