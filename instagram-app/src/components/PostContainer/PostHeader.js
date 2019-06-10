import React from 'react';
import TopBar from './StyledComponents/PostHeader';

export default function PostHeader(props) {
  return (
    <TopBar>
      <img src={props.displayPic} alt={`${props.username} profile`} />
      <span>{props.username}</span>
    </TopBar>
  );
}