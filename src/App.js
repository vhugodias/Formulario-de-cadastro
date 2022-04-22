import "./App.css";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/Welcome/:name">
          <Welcome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
