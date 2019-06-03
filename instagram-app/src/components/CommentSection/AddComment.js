import React from 'react';

export default function AddComment(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    props.submitHandler(props.id);
  };

  const onChangeHandler = (event) => {
    event.stopPropagation();
    props.changeHandler(event.target.value);
  }
  return(
    <form onSubmit={submitHandler} className='add-comment-container'>
      <input onChange={onChangeHandler} value={props.val} placeholder='Add a comment...' />
      <button type='submit'>&middot;&middot;&middot;</button>
    </form>
  );
}
