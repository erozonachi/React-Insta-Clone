import React from 'react';

export default function PostHeader(props) {
  return (
    <div className='post-header'>
      <img className='display-pic' src={props.displayPic} />
      <span>{props.username}</span>
    </div>
  );
}