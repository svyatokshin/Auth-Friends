import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import styled from 'styled-components';

const Nav = styled.div`
  width: 20%;
  margin: 10px auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  text-decoration:none;
`

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <Link to='/login'>Login</Link>
          <br/>
          <Link to ='/friends'>My friends</Link>
        </Nav>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='login' component={Login} />
          <Route component = {Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
