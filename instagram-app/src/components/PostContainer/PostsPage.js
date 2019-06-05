import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default function PostsPage(props) {
    return(
      <div className='post-container'>
        <SearchBar changeHandler={props.searchChangeHandler} />
          {props.postList.map(post => <PostContainer 
            key={post.id} 
            changeHandler={props.changeHandler} 
            submitHandler={props.submitHandler}
            likeHandler={props.likeHandler}
            post={post} 
          />)}
      </div>
    );
}
