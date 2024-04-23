import Footer from "./Footer";
import "./FrameComponent1.css";

const FrameComponent = () => {
  return (
    <footer className="footer-parent">
      <Footer />
      <div className="footer-wrapper">
        <Footer
          propAlignSelf="unset"
          propWidth="1512px"
          propDisplay="inline-block"
          propMinWidth="52px"
        />
      </div>
    </footer>
  );
};

export default FrameComponent;
