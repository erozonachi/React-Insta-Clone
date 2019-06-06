import React from 'react';
import AddCommentBox from './StyledComponents/AddCommentBox';

export default function AddComment(props) {
  return(
    <AddCommentBox onSubmit={props.submitHandler} className='add-comment-container'>
      <input onChange={props.changeHandler} value={props.val} placeholder='Add a comment...' />
      <button type='submit'>&middot;&middot;&middot;</button>
    </AddCommentBox>
  );
}
