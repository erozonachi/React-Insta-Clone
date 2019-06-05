import React, {Component,} from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import moment from 'moment';
import PropTypes from 'prop-types';
import './Comments.css';

export default class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: '',
    };
  }

  addNewComment = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.props.id, this.state.newComment);
    this.setState({newComment: ''});
  };

  onChangeHandler = (event) => {
    event.stopPropagation();
    const val = event.target.value;
    this.setState({
        newComment: val,
      });
  }

  render() {
    const postedWhen = moment(
      moment(this.props.timestamp).format('YYYYMMDD'), 'YYYYMMDD').fromNow();
    console.log(postedWhen);

    return (
      <div className='comment-container'>
        <ul>
          {this.state.comments.map(comment => <Comment key={`${comment.id}`} comment={comment} />)}
        </ul>
        <span>{postedWhen}</span>
        <AddComment 
          val={this.state.newComment}
          changeHandler={this.onChangeHandler}
          submitHandler={this.addNewComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  id: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
};
