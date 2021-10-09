import { Link } from "react-router-dom";
import "../styles/404.css";
import Footer from "./Footer";

function fournotfour() {
  return (
    <div className="bg-light">
      <center>
        <img src="/404.gif" alt="404" className="img-fluid" />
        <br />
        <Link to="/">Go Back Home</Link>
      </center>
      <Footer />
    </div>
  );
}

export default fournotfour;
