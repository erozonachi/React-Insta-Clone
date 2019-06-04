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
  bgRed: {
    color: 'red',
  }
}));

export default function PostLike(props) {

  const styles = useStyles();

    return(
      <div className='like-container'>
        <div className='like-controls'>
          <FavoriteIcon 
            onClick={props.likeHandler} 
            className={`${styles.iconSpaced} like-control ${props.liked? styles.bgRed : null}`} 
          />
          <CommentIcon className={`${styles.iconSpaced} like-control`} />
        </div>
        <span>{`${props.likes} ${props.likes > 1? 'likes' : 'like'}`}</span>
      </div>
    );
}