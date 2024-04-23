import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  return (
    <header className="navbar4">
      <div className="background15" />
      <div className="logo-wrapper">
        <b className="logo4">ITEMIZE</b>
      </div>
      <div className="button-group">
        <button className="button14" onClick={onButtonClick}>
          <div className="text16">login</div>
          <div className="background16" />
        </button>
        <button className="button15" onClick={onButton1Click}>
          <img className="background-icon" alt="" src="/background.svg" />
          <div className="signup-text">Sign up</div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
