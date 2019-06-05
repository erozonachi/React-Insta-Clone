import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <div className='login-container'>
        <h1>Instagram</h1>
        <form>
          <input value={this.state.username} placeholder='Enter Username' />
          <input value={this.state.password} type='password' placeholder='Enter Password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}
