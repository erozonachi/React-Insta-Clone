import React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import './Comments.css';

export default function CommentSection(props) {
  return (
    <div className='comment-container'>
      <ul>
        {props.comments.map(comment => <Comment key={`${comment.id}`} user={comment.username} text={comment.text} />)}
      </ul>
      <span>{props.timestamp}</span>
      <AddComment 
        id={props.id}
        val={props.val}
        changeHandler={props.changeHandler}
        submitHandler={props.submitHandler}
      />
    </div>
  );
}