import React from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./AccountSignup.css";
import {useState} from 'react';
import {useFormInfo} from "../libs/libs";

export default function AccountSignup() {
    //Sử dụng useState để set state, không cần state, setState
    const [info, handleInfoChange] = useFormInfo({
        username: '',
        password: '',
        confirmPassword: ''
    });
  
    function validateForm() {
      return (
            info.username.length > 0 &&
            info.password.length > 0 &&
            info.password === info.confirmPassword
            );
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <div className='SignupForm'>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              value={info.username}
              onChange={handleInfoChange}
            />
          </FormGroup>
  
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl
              value={info.password}
              onChange={handleInfoChange}
              type='password'
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={info.confirmPassword}
              onChange={handleInfoChange}
              type='password'
            />
          </FormGroup>
  
          <Button disabled={!validateForm()} type='submit' block>
            Sign Up
          </Button>
  
          <Link to='/login' className='btn Cancel'>Cancel</Link>
        </form>
      </div>
    );
}