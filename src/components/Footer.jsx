import { Outlet, Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-social-links">
            <Link to="https://www.linkedin.com/in/mahamed-abdirahman-86695a260/">
              <FaLinkedin className="social-link-bottom" />
            </Link>
            <Link to="https://www.instagram.com/mohamed2k710/">
              <FaInstagram className="social-link-bottom" />
            </Link>
            <Link to="https://github.com/Noxtimo">
              <FaGithub className="social-link-bottom" />
            </Link>
            <Link to="https://www.youtube.com/@Noxti">
              <FaYoutube className="social-link-bottom" />
            </Link>
          </div>

          <h3 className="footer-h2">mahamedharrow@gmail.com</h3>
        </div>
      </footer>

      <footer className="main-footer second-footer">
        <div className="footer-content2">
          <h2 className="footer-h2">
            <small>Copyright © {year} </small>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
