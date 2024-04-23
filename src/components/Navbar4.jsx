import "./Navbar4.css";

const Navbar = ({ onLogoTextClick, onPersonIconClick }) => {
  return (
    <header className="navbar8">
      <h1 className="logo14" onClick={onLogoTextClick}>
        ITEMIZE
      </h1>
      <div className="icons5">
        <img
          className="notificationsstyle4-icon5"
          loading="lazy"
          alt=""
          src="/notificationsstyle4.svg"
        />
        <img
          className="person-icon5"
          loading="lazy"
          alt=""
          src="/person.svg"
          onClick={onPersonIconClick}
        />
        <img
          className="reorder-threeoutline-icon5"
          loading="lazy"
          alt=""
          src="/reorderthreeoutline.svg"
        />
      </div>
    </header>
  );
};

export default Navbar;
