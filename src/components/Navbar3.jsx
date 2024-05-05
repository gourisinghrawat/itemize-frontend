import "./Navbar3.css";

const Navbar = ({ onLogoTextClick, onPersonIconClick }) => {
  return (
    <header className="navbar7">
      <h1 className="logo13" onClick={onLogoTextClick}>
        ITEMIZE
      </h1>
    </header>
  );
};

export default Navbar;
