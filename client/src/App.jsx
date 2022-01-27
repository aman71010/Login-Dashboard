import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';
import Group from './pages/Group/Group';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/register"> 
          <Register />
        </Route>
        <Route path="/dashboard"> 
          <Dashboard />
        </Route>
        <Route path="/userprofile"> 
          <UserProfile />
        </Route>
        <Route path="/group"> 
          <Group />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;