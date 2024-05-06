import "./Navbar1.css";

const Navbar1 = ({ onLogoTextClick, onPersonIconClick }) => {
  return (
    <header className="navbar5">
      <b className="logo8" onClick={onLogoTextClick}>
        ITEMIZE
      </b>
      <div className="icons2">
        {/* <img
          className="notificationsstyle4-icon2"
          loading="lazy"
          alt=""
          src="/notificationsstyle4.svg"
        /> */}
        <img
          className="person-icon2"
          loading="lazy"
          alt=""
          src="/person.svg"
          onClick={onPersonIconClick}
        />
        {/* <img
          className="reorder-threeoutline-icon2"
          loading="lazy"
          alt=""
          src="/reorderthreeoutline.svg"
        /> */}
      </div>
    </header>
  );
};

export default Navbar1;
