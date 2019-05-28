import React from 'react';

const NavBar = (props) => {

    
return (

  <div className="buttons">
  <button className="Navbutton" onClick={() => {
    props.changePage("search")
  }}>Search for a show</button>
<button className="Navbutton" onClick={() => {
    props.changePage("userHome")
  }}>back to me!</button>
<button className="Navbutton" onClick={() => {
    props.changePage("splash")
  }}>signout</button>
  </div>
);
}
export default NavBar;
