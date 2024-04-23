import { useCallback } from "react";
import TextInputs from "./TextInputs";
import { useNavigate } from "react-router-dom";
import "./SigninForm.css";

const SigninForm = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <form className="signin-form">
      <div className="mediablr">
        <div className="media-background2" />
        <div className="background30" />
      </div>
      <div className="logo-parent">
        <h2 className="logo9">Login</h2>
        <div className="input-field-container">
          <div className="text-inputs-parent">
            <TextInputs icon="pending_I12:1844;11:1091;11:237" />
            <TextInputs icon="pending_I12:1844;11:1092;11:237" />
          </div>
          <div className="input-field-container-inner">
            <div className="frame-parent5">
              <div className="logo-wrapper2">
                <h1 className="logo10">ITEMIZE</h1>
              </div>
              <h3 className="text30">
                One Step Solution to Inventory Management and Supply Chain
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="text-wrapper">
        <div className="text31" />
      </div>
      <div className="button-frame">
        <button className="button31" onClick={onButtonClick}>
          <div className="link-link">Login</div>
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
