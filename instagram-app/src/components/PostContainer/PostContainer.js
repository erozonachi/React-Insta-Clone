import React from 'react';
import PostHeader from './PostHeader';
import PostLike from './PostLike';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer(props) {
  return (
    <div className='post-container'>
      <PostHeader username={props.post.username} displayPic={props.post.thumbnailUrl} />
      <img src={props.post.imageUrl} alt={`${props.post.username} post image`} />
      <PostLike likes={props.post.likes} />
      <CommentSection timestamp={props.post.timestamp} comments={props.post.comments} />
    </div>
  );
}