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

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => <PostContainer key={post.id} post={post} />)}
      </div>
    );
  }
}

export default App;
