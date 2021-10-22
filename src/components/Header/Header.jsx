import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav
          className="navBackground"
          style={{ backgroundColor: ""}}
        >
          <h1 class="LogoText">EcoNet
          </h1>
          <Link to="/" className="navbar-brand">
            <img className="navbar-logo" src={""} alt="Logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
             
              
              <Link to="/login" className="btn btn-warning">
                Login <i className="fa fa-sign-in" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
