import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import beautyImg from "../../assets/images/beauty.png";
import "./Home.css";

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="left">
        <h1>Make Up</h1>
        <h6>Workshop</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adi piscing elit, sed diam
          nonummy nibh euis mod Lorem ipsum dolor sit
        </p>
        <Link to="/" className="register-link">
          Register Now{" "}
          <span>
            <FaAngleRight />
          </span>
        </Link>
        <div className="social">
          <a href="https://instagram.com">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com">
            <FaTwitter />
          </a>
          <a href="https://instagram.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="right">
        <img src={beautyImg} alt="" />
      </div>
    </div>
  );
};

export default HomeScreen;
