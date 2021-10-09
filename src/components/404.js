import { Link } from "react-router-dom";
import "../styles/404.css";

function fournotfour() {
  return (
    <div className="bg-light">
      <center>
        <img src="/404.gif" alt="404" className="img-fluid" />
        <br />
        <Link to="/">Go Back Home</Link>
      </center>
    </div>
  );
}

export default fournotfour;
