import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="globe"></div>
      <br />
      <h1 className="text-center">
        Welcome to the word couter,{" "}
        <Link to="/app">
          <span className="text-decoration-underline span">Let's go</span>{" "}
        </Link>
      </h1>
    </div>
  );
}
export default Home;
