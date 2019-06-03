import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      posts: dummyData
    };
  }

  handleChange = (id, val) => {
    this.setState(prevState => {
      const newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          post.newComment = val;
        }
        return post;
      });

      return {
        posts: newPosts,
      };
    });
  }

  handleSubmit = (id) => {
    this.setState(prevState => {
      const newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          if (post.newComment.trim() !== '') {
            post.comments.push({
              id: Date.now(),
              username: 'Eneh',
              text: post.newComment,
            });
            post.newComment = '';
          }
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
          post={post} 
        />)}
      </div>
    );
  }
}

export default App;
