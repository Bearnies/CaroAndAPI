import React from 'react';
import {useState} from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./AccountLogin.css";

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return (username.length > 0 &&
            password.length > 0
            );
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </FormGroup>

        <Button disabled={!validateForm()} type='submit' block>
          Login
        </Button>

        <Link to="/signup" className='btn btn-primary Signup'>Sign up</Link>
      </form>
    </div>
  );
}