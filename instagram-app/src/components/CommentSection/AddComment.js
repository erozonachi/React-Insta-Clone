import React from 'react';

export default function AddComment(props) {
  return(
    <form onSubmit={props.submitHandler} className='add-comment-container'>
      <input onChange={props.changeHandler} value={props.val} placeholder='Add a comment...' />
      <button type='submit'>&middot;&middot;&middot;</button>
    </form>
  );
}
