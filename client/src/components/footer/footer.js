import "./footer.scss";
import { ReactComponent as Logo } from "../../svgs/logo.svg";

const Footer = () => {
  return (
    <footer>
      <Logo className="logo" />
      <div className="footer__container">
        <div className="footer__container-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square "></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container-text"></div>

        <span>copyright LandC@re</span>
        <p>This is a mockup, it is just for demonstration purpose..</p>
        <div>
          <a href="/users/login">Admin Login</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
