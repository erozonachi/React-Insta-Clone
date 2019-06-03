import React from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';

export default function PostLike(props) {
  return(
    <div className='like-container'>
      <div className='like-controls'>
        <FavoriteIcon className='like-control' />
        <CommentIcon className='like-control' />
      </div>
      <span>{`${props.likes} ${props.likes > 1? 'likes' : 'like'}`}</span>
    </div>
  );
}