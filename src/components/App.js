import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './Game'
import AccountLogin from '../containers/AccountLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return <Router>
      <Switch>
        <Route path ='/' component={AccountLogin}></Route>
        <Route path ='/login' component={AccountLogin}></Route>
      </Switch>   
  </Router>
}

export default App;
