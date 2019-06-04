import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import getDummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import FuzzySearch from './FuzzySearch';
import LocalData from './LocalData';

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

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    const postList = this.state.searchTerm? 
    FuzzySearch(this.state.posts, this.state.searchTerm) : 
    this.state.posts;

    return (
      <div className="App">
        <SearchBar changeHandler={this.handleSearch} />
        {postList.map(post => <PostContainer 
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
