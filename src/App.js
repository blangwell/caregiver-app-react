import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import jwt_decode from 'jwt-decode';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import Chart from './components/Chart';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const jwtFromLocalStorage = localStorage.getItem('jwt');

  useEffect(() => {
    if (jwtFromLocalStorage) {
      const decoded = jwt_decode(jwtFromLocalStorage);
      async function awaitUserStateUpdate() {
        await setCurrentUser(decoded);
      }
      console.log(decoded);
      // check expiration on decoded token
      if (decoded.exp < Math.floor(Date.now() / 1000)) {
        setCurrentUser(null);
        localStorage.removeItem('jwt');
      }
      awaitUserStateUpdate();
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
      await setCurrentUser(decoded);
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
        <Route path="/profile">
          { currentUser ? <Profile currentUser={currentUser} /> : <Redirect to="/login" /> }
        </Route>
        <Route path="/chart/new">
          {/* { currentUser ? <Chart /> : <Redirect to="/login" /> } */}
          <Chart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
