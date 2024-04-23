import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Trial.css";

const Trial = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/register-page");
  }, [navigate]);

  return (
    <div className="trial">
      <div className="background-parent">
        <div className="background19" />
        <div className="background20" />
      </div>
      <div className="content10">
        <h1 className="title8">Value Proposition</h1>
        <div className="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="button-instance">
          <button className="button17" onClick={onButtonClick}>
            <img className="background-icon1" alt="" src="/background.svg" />
            <div className="signup-text1">Sign up</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
