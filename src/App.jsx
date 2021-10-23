import { Route, Switch } from "react-router-dom";
import { createBrowserHistory as history} from 'history';
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import User from "./components/User/User";


const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/login">
        <LoginPage />
        
      </Route>
      <Route path="/user">
        <User />
      </Route>
    </Switch>
  );
};

export default App;
