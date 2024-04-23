import { useCallback } from "react";
import Credentials from "./Credentials"; // import credentials
import { useNavigate } from "react-router-dom";
import "./SigninForm.css";// remove text inputs yahan pe or jo code mein likhe h

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
         
          <div className="credentials-group">
          <Credentials
          inputTextLabel="Email"
          typeHerePlaceholder=" Enter your valid Email"
          icon="pending_I113:4406;113:4271;3:258;1:38"
        />
            
            <Credentials
          inputTextLabel="Password"
          typeHerePlaceholder="Enter your password"
          icon="pending_I113:4406;113:4274;3:258;1:38"
        />
          </div>
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
