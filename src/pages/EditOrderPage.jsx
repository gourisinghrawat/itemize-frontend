import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextInputs from "../components/TextInputs";
import Dropdowns from "../components/Dropdowns";
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
                icon="pending_I33:2362;33:1876;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <TextInputs
                inputTextLabel="Date Created"
                icon="pending_I33:2362;33:1877;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <Dropdowns dropdownTitle="Type" />
              <Dropdowns dropdownTitle="Status" />
              <TextInputs
                inputTextLabel="Partner Id"
                icon="pending_I33:2362;33:1880;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <TextInputs
                inputTextLabel="Bill"
                icon="pending_I33:2362;33:1881;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
            </div>
            <button className="button11" onClick={onButtonClick}>
              <div className="text13">Edit</div>
            </button>
            <button className="button12">
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
