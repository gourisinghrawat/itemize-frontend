import "./Navbar3.css";

const Navbar = ({ onLogoTextClick, onPersonIconClick }) => {
  return (
    <header className="navbar7">
      <h1 className="logo13" onClick={onLogoTextClick}>
        ITEMIZE
      </h1>
      <div className="icons4">
        <img
          className="notificationsstyle4-icon4"
          loading="lazy"
          alt=""
          src="/notificationsstyle4.svg"
        />
        <img
          className="person-icon4"
          loading="lazy"
          alt=""
          src="/person.svg"
          onClick={onPersonIconClick}
        />
        <img
          className="reorder-threeoutline-icon4"
          loading="lazy"
          alt=""
          src="/reorderthreeoutline.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
