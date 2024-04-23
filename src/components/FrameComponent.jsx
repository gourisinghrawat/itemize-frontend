import { useCallback } from "react";
import TextInputs1 from "./TextInputs1";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="warehouse-new-frame">
      <div className="warehouse-new2">
        <div className="background29" />
        <TextInputs1 />
        <div className="second-button">
          <div className="button-parent1">
            <div className="button28" onClick={onButtonContainerClick}>
              <button className="button29">
                <div className="signup-text3">Join</div>
              </button>
            </div>
            <div className="join-button">
              <button className="button30">
                <div className="text28">Cancel</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
