import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/"> 
          <Home /> 
        </Route> */}
        <Route path="/login"> 
          <Login />
        </Route>
        <Route path="/register"> 
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;