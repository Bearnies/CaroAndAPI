import React from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./AccountLogin.css"

class AccountLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let {username, password} = this.state;
    this.props.logIn(username, password);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    let {username, password} = this.state;
    let {loginSuccess, loginFailed} = this.props;
    return(
        <div className='Login'>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              value={username}
              onChange={e => this.setState({username: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={e => this.setState({password: e.target.value})}
              type='password'
            />
          </FormGroup>

          <Button type='submit' block>
            Login
          </Button>

          {loginSuccess && <Link to='/home'></Link>}
          {loginFailed && <div>{loginFailed.message}</div>}

          <Link to='/signup' className='btn Signup'>Sign Up</Link>
        </form>
      </div>
    )
  }
}

export default AccountLogin;

// export default function AccountLogin() {
//   //Sử dụng useState để set state, không cần state, setState
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   function validateForm() {
//     return(
//             username.length > 0 &&
//             password.length > 0
//     );
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className='Login'>
//       <form onSubmit={handleSubmit}>
//         <FormGroup>
//           <FormLabel>Username</FormLabel>
//           <FormControl
//             autoFocus
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//         </FormGroup>

//         <FormGroup>
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type='password'
//           />
//         </FormGroup>

//         <Button disabled={!validateForm()} type='submit' block>
//           Login
//         </Button>

//         <Link to='/signup' className='btn Signup'>Sign Up</Link>
//       </form>
//     </div>
//   );
// }