import { useMemo } from "react";
import "./Footer2.css";

const Footer = ({ propAlignSelf, propWidth, propDisplay, propMinWidth }) => {
  const footerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const linkStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className="footer2" style={footerStyle}>
      <div className="background31" />
      <div className="frame-parent6">
        <div className="frame-wrapper4">
          <div className="frame-parent7">
            <div className="links-left-container">
              <div className="links-left3">
                <b className="link12">Product</b>
                <b className="link13">Features</b>
                <b className="link14" style={linkStyle}>
                  Resources
                </b>
              </div>
            </div>
            <div className="logo-wrapper3">
              <h2 className="logo11">ITEMIZE</h2>
            </div>
            <div className="links-right-container">
              <div className="links-right4">
                <b className="link15">About</b>
                <b className="link16">Blog</b>
                <b className="link17">Support</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="divider-icon2"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
      </div>
      <div className="social-media-container">
        <img className="social-media-icon2" alt="" src="/social-media.svg" />
      </div>
    </div>
  );
};

export default Footer;
