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
