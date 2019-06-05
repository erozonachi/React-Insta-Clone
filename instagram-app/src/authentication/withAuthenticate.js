import React from 'react';

export default function withAuthenticate(Component) {
  return class extends React.Component {
    render() {
      return (
        <Component {...this.props} />
      );
    }
  };
}
