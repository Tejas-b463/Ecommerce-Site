import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <Link to="#">About</Link>
          <Link to="#">Store locator</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">News</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Contact Us</Link>
        </div>
        <p className="love">
          Reference &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://fakestoreapi.com/"
          >
            &nbsp; Fake Api Store
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
