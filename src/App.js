import "bootstrap/dist/css/bootstrap.min.css";
import Textarea from "./components/Textarea";
import Home from "./components/Home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import fournotfour from "./components/404";
export default function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/app" exact component={Textarea} />
          <Route component={fournotfour} />
        </Switch>
      </Router>
    </div>
  );
}
