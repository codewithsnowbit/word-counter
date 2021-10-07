import { Link } from "react-router-dom";
import "../styles/Home.css";
import "animate.css";

function Home() {
  return (
    <div>
      <div className="globe"></div>
      <br />
      <h2 className="text-center animate__animated animate__tada">
        Welcome to the Word Counter🎉,{" "}
        <Link to="/app">
          <span className="text-decoration-underline span">Let's go </span>{" "}
        </Link>
      </h2>
    </div>
  );
}
export default Home;
