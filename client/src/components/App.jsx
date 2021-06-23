import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginForm } from "./form/LoginForm";
import { RegistryForm } from "./form/RegistryForm";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/registration" component={RegistryForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
