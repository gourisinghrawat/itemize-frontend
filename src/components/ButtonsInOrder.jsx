import { useCallback } from "react";
import TextInputs from "./TextInputs";
import Dropdowns11 from "./Dropdowns11";
import { useNavigate } from "react-router-dom";
import "./ButtonsInOrder.css";

const ButtonsInOrder = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/edit-cart-page");
  }, [navigate]);

  //  const onButton1Click = useCallback(() => {
  //    navigate("/LandingPage");
  //  }, [navigate]);


  return (
    <form className="buttons-in-order2">
      <b className="title17">Order</b>
      <div className="product-form4">
        <TextInputs
          inputTextLabel="Partner Id"
          propWidth="unset"
          propFlex="1"
          propMinWidth="147px"
        />
        <Dropdowns11 />
      </div>
      <button className="button51" onClick={onButtonClick}>
        <div className="button52">Save</div>
      </button>
      <button className="button53" onClick={onButtonClick}>
        <div className="text65">Cancel</div>
      </button>
      <button className="button54" onClick={onButton2Click}>
        <div className="text66">Cart</div>
      </button>
    </form>
  );
};

export default ButtonsInOrder;
