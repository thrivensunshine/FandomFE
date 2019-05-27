import React, { Component } from 'react';

class Splash extends Component {



state={
name: "",
avatar: ""
}


handleChange = (event) =>{
this.setState({
  [event.target.name]: event.target.value
})
}

handleSubmit = (event) =>{
event.preventDefault()
console.log(this.state)

}






  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <h3>name</h3>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          <h3>avatar url</h3>
          <input type="text" value={this.state.avatar} name="avatar" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      <h1>Hello From Splash</h1>
    </div>
    );
  }

}

export default Splash;
