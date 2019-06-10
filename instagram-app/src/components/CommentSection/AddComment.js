import React from 'react';
import AddCommentBox from './StyledComponents/AddCommentBox';
import InputBox from '../StyledComponents/InputBox';
import Button from '../StyledComponents/Button';

export default function AddComment(props) {
  return(
    <AddCommentBox onSubmit={props.submitHandler} className='add-comment-container'>
      <InputBox flat onChange={props.changeHandler} value={props.val} placeholder='Add a comment...' />
      <Button flat type='submit'>&middot;&middot;&middot;</Button>
    </AddCommentBox>
  );
}
