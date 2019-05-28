import React from 'react';

const NavBAr = (props) => {
    console.log(props)
return (

  <div className="buttons">
  <button className="button" onClick={() => {
    props.changePage("search")
  }}>Search for a show</button>
  <button className="button" onClick={() => {
    props.changePage("userHome")
  }}>back to me!</button>
  <button className="button" onClick={() => {
    props.changePage("splash")
  }}>signout</button>
  </div>
);
}
export default NavBAr;
