import React from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./AccountSignup.css";
import {useState} from 'react';

export default function AccountSignup() {
    //Sử dụng useState để set state, không cần state, setState
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    function validateForm() {
      return (
              username.length > 0 &&
              password.length > 0 &&
              password === confirmPassword
            );
    }
  
    function handleSubmit(event) {
      event.preventDefault();

      this.setState({ submitted: true });
      const { user } = this.state;
      if (user.username && user.password) {
        this.props.register(user);
      }
    }
  
    return (
      <div className='SignupForm'>
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

          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              type='password'
            />
          </FormGroup>
  
          <Button disabled={!validateForm()} type='submit' block>
            Sign Up
          </Button>
  
          <Link to="/login" className='btn btn-primary Cancel'>Cancel</Link>
        </form>
      </div>
    );
}