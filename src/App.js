import "bootstrap/dist/css/bootstrap.min.css";
import Textarea from "./components/Textarea";
import Home from "./components/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
export default function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={Textarea} />
      </Router>
    </div>
  );
}
