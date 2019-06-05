import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleInputChange = (event) => {
    if (event.target.placeholder.includes('Username')) {
      this.setState({username: event.target.value});
    } else if (event.target.placeholder.includes('Password')) {
      this.setState({password: event.target.value});
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.username.trim() !== '' && this.state.password.trim() !== '') {
      /**  perform login */
      this.setState({
        username: '',
        password: ','
      });
    }
  }

  render() {
    return (
      <div className='login-container'>
        <h1>Instagram</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input onChange={this.handleInputChange} value={this.state.username} placeholder='Enter Username' />
          <input onChange={this.handleInputChange} value={this.state.password} type='password' placeholder='Enter Password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}
