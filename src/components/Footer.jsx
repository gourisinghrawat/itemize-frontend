import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="background24" />
      <div className="background-footer">
        <div className="links-left">
          <div className="links-right-parent">
            <div className="links-right">
              <div className="links-left1">
                <b className="link">Product</b>
                <b className="link1">Features</b>
                <b className="link2">Resources</b>
              </div>
            </div>
            <div className="logo-container">
              <b className="logo5">ITEMIZE</b>
            </div>
            <div className="links-right1">
              <div className="links-right2">
                <b className="link3">About</b>
                <b className="link4">Blog</b>
                <b className="link5">Support</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="divider-icon"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
      </div>
      <div className="social-media-links">
        <img
          className="social-media-icon"
          loading="lazy"
          alt=""
          src="/social-media.svg"
        />
      </div>
    </footer>
  );
};

export default Footer;
