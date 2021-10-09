import Confetti from "react-confetti";
import "../styles/Home.css";
import useWindowSize from "react-use/lib/useWindowSize";
import "animate.css";

function Easter() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height}/>
    </div>
  );
}
export default Easter;
