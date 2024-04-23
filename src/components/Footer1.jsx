import "./Footer1.css";

const Footer1 = () => {
  return (
    <section className="footer1">
      <div className="background27" />
      <div className="frame-parent3">
        <div className="frame-wrapper3">
          <div className="frame-parent4">
            <div className="links-left-wrapper">
              <div className="links-left2">
                <b className="link6">Product</b>
                <b className="link7">Features</b>
                <b className="link8">Resources</b>
              </div>
            </div>
            <div className="logo-wrapper1">
              <h2 className="logo7">ITEMIZE</h2>
            </div>
            <div className="links-right-wrapper">
              <div className="links-right3">
                <b className="link9">About</b>
                <b className="link10">Blog</b>
                <b className="link11">Support</b>
              </div>
            </div>
          </div>
        </div>
        <img
          className="divider-icon1"
          loading="lazy"
          alt=""
          src="/divider.svg"
        />
      </div>
      <div className="social-media-wrapper">
        <img
          className="social-media-icon1"
          loading="lazy"
          alt=""
          src="/social-media.svg"
        />
      </div>
    </section>
  );
};

export default Footer1;
