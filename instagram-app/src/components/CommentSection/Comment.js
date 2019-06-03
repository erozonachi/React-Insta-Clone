import React from 'react';

export default function Comment(props) {
  return(
    <li className='comment-item'>
      {props.text}
    </li>
  );
}