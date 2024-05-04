import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextInputs from "../components/TextInputs";
import Dropdowns11 from "../components/Dropdowns11";
import Dropdowns2 from "../components/Dropdowns2";
import "./EditOrderPage.css";

const EditOrderPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/edit-order-page");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/cart-page");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  return (
    <div className="edit-order-page">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon8" alt="" src="/blurbg.svg" />
      <div className="edit-order-form-wrapper">
        <div className="edit-order-form1">
          <form className="buttons-in-order1">
            <h1 className="title6">Order</h1>
            <div className="product-form1">
              <TextInputs
                inputTextLabel="Order Id"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <TextInputs
                inputTextLabel="Date Created"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <Dropdowns11 dropdownTitle="Type" />
              <Dropdowns2 dropdownTitle="Status" />
              <TextInputs
                inputTextLabel="Partner Id"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <TextInputs
                inputTextLabel="Bill"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
            </div>
            <button className="button11" onClick={onButton3Click}>
              <div className="text13">Save Changes</div>
            </button>
            <button className="button12"onClick={onButton3Click}>
              <div className="text14">Cancel</div>
            </button>
            <button className="button13" onClick={onButton2Click}>
              <div className="text15">View Cart</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrderPage;
