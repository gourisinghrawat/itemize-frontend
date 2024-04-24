import TextInputs1 from "./TextInputs1";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent12.css";
//add stocks to product
//cancel and confirm fixed aana jana
const FrameComponent12 = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <div className="add-stock-wrapper">
      <div className="add-stock">
        <div className="background62" />
        <div className="product-a-parent">
          <div className="product-a3">Product A</div>
          <TextInputs1 />
        </div>
        <div className="either-or">
          <div className="radio-button">
            <input className="radio" type="radio" name="radioGroup-1" />
            <div className="radio-selection">Add</div>
          </div>
          <div className="radio-button1">
            <input className="radio1" type="radio" name="radioGroup-1" />
            <div className="radio-selection1">Delete</div>
          </div>
        </div>
        <div className="button-background">
          <button className="button46" onClick={onButton1Click}>
            <div className="text57">Confirm</div>
            <div className="background63" />
          </button>
          <button className="button47" onClick={onButton1Click}>
            <div className="text58">Cancel</div>
            <div className="background64" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
