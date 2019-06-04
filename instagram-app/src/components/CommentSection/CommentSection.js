import React, {Component,} from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import PropTypes from 'prop-types';
import './Comments.css';

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    };
  }

  render() {
    return (
      <div className='comment-container'>
        <ul>
          {this.state.comments.map(comment => <Comment key={`${comment.id}`} comment={comment} />)}
        </ul>
        <span>{this.props.timestamp}</span>
        <AddComment 
          id={this.props.id}
          val={this.props.val}
          changeHandler={this.props.changeHandler}
          submitHandler={this.props.submitHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  id: PropTypes.string.isRequired,
  val: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};
