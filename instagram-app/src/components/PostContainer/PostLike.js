import React from 'react';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 30,
  },
  iconSpaced: {
    margin: theme.spacing(.3),
    fontSize: 30,
  },
}));

export default function PostLike(props) {
  return(
    <div className='like-container'>
      <div className='like-controls'>
        <FavoriteIcon className={`${useStyles().iconSpaced} like-control`} />
        <CommentIcon className={`${useStyles().iconSpaced} like-control`} />
      </div>
      <span>{`${props.likes} ${props.likes > 1? 'likes' : 'like'}`}</span>
    </div>
  );
}