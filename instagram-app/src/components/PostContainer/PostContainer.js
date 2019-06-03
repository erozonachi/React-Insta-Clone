import React from 'react';
import PostHeader from './PostHeader';
import PostLike from './PostLike';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './Posts.css';

export default function PostContainer(props) {
  return (
    <div className='post-container'>
      <PostHeader username={props.post.username} displayPic={props.post.thumbnailUrl} />
      <img src={props.post.imageUrl} alt={`${props.post.username} post`} />
      <PostLike likes={props.post.likes} />
      <CommentSection 
        id={props.post.id}
        val={props.post.newComment}
        changeHandler={props.changeHandler}
        submitHandler={props.submitHandler}
        timestamp={props.post.timestamp} 
        comments={props.post.comments} 
      />
    </div>
  );
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    newComment: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
  }),
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};