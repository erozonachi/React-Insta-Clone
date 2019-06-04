import React from 'react';
import PostHeader from './PostHeader';
import PostLike from './PostLike';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './Posts.css';

export default class PostContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    }
  }

  handleLikeClick = (event) => {
    event.stopPropagation();

    this.setState(prevState => {
      if (prevState.isLiked) {
        this.props.likeHandler(this.props.post.id, -1);
      } else {
        this.props.likeHandler(this.props.post.id, 1)
      }

      return {
        isLiked: !prevState.isLiked,
      }
    })
  }

  render() {
    return (
      <div className='post-container'>
        <PostHeader username={this.props.post.username} displayPic={this.props.post.thumbnailUrl} />
        <img src={this.props.post.imageUrl} alt={`${this.props.post.username} post`} />
        <PostLike 
          likes={this.props.post.likes} 
          likeHandler={this.handleLikeClick}
          liked={this.state.isLiked}
        />
        <CommentSection 
          id={this.props.post.id}
          submitHandler={this.props.submitHandler}
          timestamp={this.props.post.timestamp} 
          comments={this.props.post.comments} 
        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object),
  }),
  submitHandler: PropTypes.func.isRequired,
  likeHandler: PropTypes.func.isRequired,
};