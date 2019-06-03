import React from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/AddCommentOutlined';

export default function PostLike(props) {
  return(
    <div className='like-container'>
      <div className='like-controls'>
        <FavoriteIcon />
        <CommentIcon />
      </div>
      <span>{`${props.likes} ${props.likes > 1? 'likes' : 'like'}`}</span>
    </div>
  );
}