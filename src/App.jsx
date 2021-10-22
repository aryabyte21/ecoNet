import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
