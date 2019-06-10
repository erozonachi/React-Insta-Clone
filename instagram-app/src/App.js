import React from 'react';
import getDummyData from './dummy-data';
import withAuthenticate from './authentication/withAuthenticate';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import FuzzySearch from './FuzzySearch';
import LocalData from './LocalData';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: [],
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.loadStateData();
  }

  componentDidUpdate() {
    LocalData.saveData('postList', this.state.posts);
  }

  loadStateData = () => {
    const postList = LocalData.fetchData('postList');
    if (postList) {
      this.setState({posts: postList});
    } else {
      getDummyData().then(posts => (
        this.setState({posts})
      ));
    }
  }

  handleSubmit = (id, commentText) => {
    this.setState(prevState => {
      const newPosts = prevState.posts.map(post => {
        if (post.id === id) {
          if (commentText.trim() !== '') {
            post.comments.push({
              id: Date.now(),
              username: LocalData.fetchData('loginUser'),
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

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    const postList = this.state.searchTerm? 
    FuzzySearch(this.state.posts, this.state.searchTerm) : 
    this.state.posts;

    return (
      <div>
        <ComponentFromWithAuthenticate 
          searchChangeHandler={this.handleSearch}
          postList={postList}
          changeHandler={this.handleChange} 
          submitHandler={this.handleSubmit}
          likeHandler={this.handleLikeClick}
        />
      </div>
    );
  }
}

export default App;
