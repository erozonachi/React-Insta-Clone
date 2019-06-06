import React from 'react';
import AddCommentBox from './StyledComponents/AddCommentBox';
import InputBox from '../StyledComponents/InputBox';

export default function AddComment(props) {
  return(
    <AddCommentBox onSubmit={props.submitHandler} className='add-comment-container'>
      <InputBox flat onChange={props.changeHandler} value={props.val} placeholder='Add a comment...' />
      <button type='submit'>&middot;&middot;&middot;</button>
    </AddCommentBox>
  );
}
