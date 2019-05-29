
import React from 'react';

const User = (props) => {
return (
  <div>
    <h1>hello {props.currentUser.name}!</h1>
    <img src={props.currentUser.avatar} alt=""  height="300" width="300"/>
  </div>
);
}
export default User;
