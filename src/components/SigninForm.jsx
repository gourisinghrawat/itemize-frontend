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
          idval="email_id"
          input_type="email"
        />
            
            <Credentials
          inputTextLabel="Password"
          idval="login_password"
          input_type="password"
          typeHerePlaceholder="Enter your password"
        />
        <Credentials
          inputTextLabel="Login"
          idval="login_confirm"
          input_type="submit"
          typeHerePlaceholder="Login"
        />
        <div className="button-frame">
        <button className="button31" onClick={onButtonClick}>
          <div className="link-link">cancel</div>
        </button>
      </div>
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
      
    </form>
  );
};

export default SigninForm;
