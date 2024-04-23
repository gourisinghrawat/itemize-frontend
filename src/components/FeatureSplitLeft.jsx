import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FeatureSplitLeft.css";

const FeatureSplitLeft = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className="feature-split-left1">
      <div className="background17" />
      <div className="content-wrapper">
        <div className="content9">
          <h1 className="title7">Feature that is amazing</h1>
          <div className="subtitle">
            At Itemize, we understand the challenges of managing inventory and
            coordinating with partners in the supply chain.
          </div>
          <button className="button16" onClick={onButtonClick}>
            <div className="text17">Sign in</div>
            <div className="background18" />
          </button>
        </div>
      </div>
      <img
        className="media-background-icon2"
        loading="lazy"
        alt=""
        src="/media-background@2x.png"
      />
    </div>
  );
};

export default FeatureSplitLeft;
