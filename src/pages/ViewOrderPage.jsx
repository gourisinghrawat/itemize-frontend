import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import TextInputs from "../components/TextInputs";
import Dropdowns11 from "../components/Dropdowns11";
import Dropdowns2 from "../components/Dropdowns2";
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

  const onButton1Click = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);


  const onButton2Click = useCallback(() => {
    navigate("/cart-page");
  }, [navigate]);

  return (
    <div className="view-order-page">
      <Navbar1
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
            <button className="button8" onClick={onButtonClick}>
              <div className="label-and-title">Edit</div>
            </button>
            <button className="button9" 
            onClick={onButton1Click}>
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
