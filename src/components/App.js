import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Game from './Game'
import AccountLogin from '../containers/AccountLogin';
import AccountSignup from '../containers/AccountSignup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return <Router>
      <Switch>
        <Route exact path ='/' component={AccountLogin}></Route>
        <Route path ='/login' component={AccountLogin}></Route>
        <Route path ='/signup' component={AccountSignup}></Route>
      </Switch>   
  </Router>
}

export default App;
