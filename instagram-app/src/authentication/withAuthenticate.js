import React from 'react';

const withAuthenticate = PostsComponent => LoginComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <PostsComponent {...this.props} />
      );
    }
  };
}

export default withAuthenticate;
