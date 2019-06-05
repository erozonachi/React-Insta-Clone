import React from 'react';
import LocalData from '../LocalData';

const withAuthenticate = PostsComponent => LoginComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      if(LocalData.fetchData('loginUser')) {
        this.setState({loggedIn: true})
      }
    }
    
    render() {
      return (
        <PostsComponent {...this.props} />
      );
    }
  };
}

export default withAuthenticate;
