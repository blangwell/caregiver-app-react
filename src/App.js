import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import jwt_decode from 'jwt-decode';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) setCurrentUser(jwt_decode(token));
    else setCurrentUser(null)
  }, [])

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      setCurrentUser(null);
    }
  }

  return (
    <Router>
      <CssBaseline />   
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/signup">
          <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/profile">
          { currentUser ? <Profile currentUser={currentUser} /> : <Redirect to="/login"/> }
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
