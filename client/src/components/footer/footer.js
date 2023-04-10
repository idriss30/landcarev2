import "./footer.scss";
import { ReactComponent as Logo } from "../../svgs/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Logo className="logo" />
      <div className="footer__container">
        <div className="footer__container-social">
          <ul>
            <li>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://www.facebook.com/"
              >
                <i className="fab fa-facebook-square "></i>
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://www.twitter.com/"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target={"_blank"}
                rel={"noreferrer noopener"}
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container-text"></div>

        <span>copyright LandC@re</span>
        <p>This is a mockup, it is just for demonstration purpose..</p>
        <div>
          <Link to="/users/login" className="footer__container-text-link">
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
