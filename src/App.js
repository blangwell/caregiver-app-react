import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          {/* <Route path="/signup">
            <Signup />
          </Route> */}
          {/* "/" route must be last <Switch> looks through its children <Route>s and
            renders the first one that matches */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
