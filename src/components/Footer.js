import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <center>
        <h3 className="text-center footerText">
          Facing issue?{" "}
          <a
            href="https://github.com/snowbit-coderboi/word-count/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Report
          </a>{" "}
        </h3>
      </center>
    </div>
  );
}

export default Footer;
