import React from 'react';

export default function Comment(props) {
  return(
    <li className='comment-item'>
      <span>{props.user} </span>{props.text}
    </li>
  );
}