
import React from 'react';

const User = (props) => {
return (
  <div>
    <h1>hello {props.currentUser.name}!</h1>
    <img src={props.currentUser.avatar} />
  </div>
);
}
export default User;
