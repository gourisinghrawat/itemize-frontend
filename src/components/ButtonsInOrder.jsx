import { useCallback } from "react";
import TextInputs from "./TextInputs";
import Dropdowns1 from "./Dropdowns1";
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

  return (
    <form className="buttons-in-order2">
      <b className="title17">Order</b>
      <div className="product-form4">
        <TextInputs
          inputTextLabel="Partner Id"
          icon="pending_I33:2559;33:2426;12:554"
          propWidth="unset"
          propFlex="1"
          propMinWidth="147px"
        />
        <Dropdowns1 />
      </div>
      <button className="button51" onClick={onButtonClick}>
        <div className="button52">Save</div>
      </button>
      <button className="button53">
        <div className="text65">Cancel</div>
      </button>
      <button className="button54" onClick={onButton2Click}>
        <div className="text66">Cart</div>
      </button>
    </form>
  );
};

export default ButtonsInOrder;
