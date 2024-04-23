import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TextInputs from "../components/TextInputs";
import Dropdowns from "../components/Dropdowns";
import "./ViewOrderPage.css";

const ViewOrderPage = () => {
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
    <div className="view-order-page">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon7" alt="" src="/blurbg.svg" />
      <div className="edit-order-form-instance">
        <div className="edit-order-form">
          <form className="buttons-in-order">
            <h1 className="title5">Order</h1>
            <div className="product-form">
              <TextInputs
                inputTextLabel="Order Id"
                icon="pending_I33:2303;33:1876;12:554"
              />
              <TextInputs
                inputTextLabel="Date Created"
                icon="pending_I33:2303;33:1877;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <Dropdowns dropdownTitle="Type" />
              <Dropdowns dropdownTitle="Status" />
              <TextInputs
                inputTextLabel="Partner Id"
                icon="pending_I33:2303;33:1880;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
              <TextInputs
                inputTextLabel="Bill"
                icon="pending_I33:2303;33:1881;12:554"
                propWidth="368px"
                propFlex="unset"
                propMinWidth="unset"
              />
            </div>
            <button className="button8" onClick={onButtonClick}>
              <div className="label-and-title">Edit</div>
            </button>
            <button className="button9">
              <div className="text11">Cancel</div>
            </button>
            <button className="button10" onClick={onButton2Click}>
              <div className="text12">View Cart</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderPage;
