import TextInputs1 from "./TextInputs1";
import "./FrameComponent12.css";
//add stocks to product
const FrameComponent1 = () => {
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
          <button className="button46">
            <div className="text57">Confirm</div>
            <div className="background63" />
          </button>
          <button className="button47">
            <div className="text58">Cancel</div>
            <div className="background64" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
