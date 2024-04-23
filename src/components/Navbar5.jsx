import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar5.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <header className="navbar9">
      <h1 className="logo15" onClick={onLogoTextClick}>
        ITEMIZE
      </h1>
      <div className="icons6">
        <img
          className="notificationsstyle4-icon6"
          loading="lazy"
          alt=""
          src="/notificationsstyle4.svg"
        />
        <img
          className="person-icon6"
          loading="lazy"
          alt=""
          src="/person.svg"
          onClick={onPersonIconClick}
        />
        <img
          className="reorder-threeoutline-icon6"
          loading="lazy"
          alt=""
          src="/reorderthreeoutline.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
