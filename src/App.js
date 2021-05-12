import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Nav from './components/Nav';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    
  })

  return (
    <Router>
      <CssBaseline />   
      <Nav />
      <Switch>
        <Route path="/login">
          <LoginForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/signup">
          <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/profile">
          <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        {/* "/" route must be last <Switch> looks through its children <Route>s and
          renders the first one that matches */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
