import "./Navbar2.css";

const Navbar = ({ onLogoTextClick, onPersonIconClick }) => {
  return (
    <header className="navbar6">
      <h2 className="logo12" onClick={onLogoTextClick}>
        ITEMIZE
      </h2>
      <div className="icons3">
        <img
          className="notificationsstyle4-icon3"
          loading="lazy"
          alt=""
          src="/notificationsstyle4.svg"
        />
        <img
          className="person-icon3"
          loading="lazy"
          alt=""
          src="/person.svg"
          onClick={onPersonIconClick}
        />
        <img
          className="reorder-threeoutline-icon3"
          loading="lazy"
          alt=""
          src="/reorderthreeoutline.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
