import React from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./AccountLogin.css";
import {useState} from 'react';

export default function AccountLogin() {
  //Sử dụng useState để set state, không cần state, setState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return(
            username.length > 0 &&
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

        <Link to='/signup' className='btn Signup'>Sign Up</Link>
      </form>
    </div>
  );
}