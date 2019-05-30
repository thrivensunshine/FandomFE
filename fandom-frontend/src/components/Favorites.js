import React from 'react';

const Favorite = (props) => {
console.log(props.key, "<KEY")

function remove(){
  console.log(props.bmark.id)
  props.deleteFetch(props.bmark.id)



}

return (
  <div className="favs">
  <h3>{props.bmark.name}</h3>
  <img style={{height:300, width:200}}src={props.bmark.img_url} alt="" />
<br />
  <div data-value={props.id} onClick={remove}>🗑 remove from bookmarks</div>
  <a href={props.bmark.official_site} target="_blank" rel="noopener noreferrer">visit official website</a>
  </div>
);}

export default Favorite;
