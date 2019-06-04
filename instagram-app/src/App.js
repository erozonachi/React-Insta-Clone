import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import getDummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.loadStateData();
  }

  loadStateData = () => {
    getDummyData().then(posts => (
      this.setState({posts})
    ));
  }

  handleSubmit = (id, commentText) => {
    this.setState(prevState => {
      const newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          if (commentText.trim() !== '') {
            post.comments.push({
              id: Date.now(),
              username: 'Eneh',
              text: commentText,
            });
          }
        }
        return post;
      });

      return {
        posts: newPosts,
      };
    });
  }

  handleLikeClick = (id, val) => {
    this.setState(prevState => {
      const newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          post.likes += val
        }
        return post;
      });

      return {
        posts: newPosts,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => <PostContainer 
          key={post.id} 
          changeHandler={this.handleChange} 
          submitHandler={this.handleSubmit}
          likeHandler={this.handleLikeClick}
          post={post} 
        />)}
      </div>
    );
  }
}

export default App;
