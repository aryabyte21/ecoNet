import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Home from "./pages";
import User from "./components/User/User";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
