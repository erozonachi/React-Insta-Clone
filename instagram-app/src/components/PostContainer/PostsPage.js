import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default function PostsPage(props) {
  return(
    <div>
      <SearchBar changeHandler={props.handleSearch} />
        {props.postList.map(post => <PostContainer 
          key={post.id} 
          changeHandler={props.handleChange} 
          submitHandler={props.handleSubmit}
          likeHandler={props.handleLikeClick}
          post={post} 
        />)}
    </div>
  );
}
