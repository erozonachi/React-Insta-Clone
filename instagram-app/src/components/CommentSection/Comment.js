import React from 'react';
import PropTypes from 'prop-types';

export default function Comment(props) {
  return(
    <li>
      <span>{props.comment.username} </span>{props.comment.text}
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
