import React from 'react';

const User = (props) => {
return (
  <div className="aye">
    <h1>hello {props.currentUser.name}!</h1>
    <img src={props.currentUser.avatar} alt=""/>
  </div>
);
}
export default User;
