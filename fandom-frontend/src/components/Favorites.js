import React from 'react';

const Favorite = (props) => {
return (
  <div>
  <h3>{props.bmark.name}</h3>
  <img style={{height:300, width:200}}src={props.bmark.img_url} alt="" />
<br />
  <div>🗑 remove from bookmarks</div>
  <a href={props.bmark.official_site} target="_blank" rel="noopener noreferrer">visit official website</a>
  </div>
);}

export default Favorite;
