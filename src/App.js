import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import jwt_decode from 'jwt-decode';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decoded = jwt_decode(token);
      console.log(decoded);
      // check expiration on decoded token
      if (!token || decoded.exp < Math.floor(Date.now() / 1000)) setCurrentUser(null);
    }
  }, [location]);

  const handleLogin = async (values) => {
    console.log(values);
    try {
      const response = await axios.post('http://localhost:8000/login', {
        email: values.email,
        password: values.password,
        withCredentials: true
      });
      const { token } = response.data;  
      localStorage.setItem('jwt', token);
      const decoded = jwt_decode(token);
      console.log(decoded)
      setCurrentUser(decoded);
    } catch (err) {
      console.log(err);
    };
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      setCurrentUser(null);
    }
  }

  return (
    <div>
      <CssBaseline />   
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} />
        </Route>
        <Route 
          path="/profile"
          // render={(props) => currentUser ? <Profile {...props} currentUser={currentUser} /> : <Redirect to="/login" /> }
        >
          { currentUser ? <Profile currentUser={currentUser} /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
