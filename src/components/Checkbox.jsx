import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import RowOrders from "./RowOrders";
import "./Checkbox.css";

const Checkbox = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/view-order-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/view-order-page");
  }, [navigate]);

  const onAddPdtButtonClick = useCallback(() => {
    navigate("/create-order-page");
  }, [navigate]);

  return (
    <div className="checkbox3">
      <div className="frame-parent14">
        <div className="back-button-container-parent">
          <div className="back-button-container1">
            {/* <button className="back-button5">
              <div className="background70" />
              <div className="back-button6">
                <div className="vector-parent1">
                  <img className="vector-icon7" alt="" src="/vector.svg" />
                  <img className="side-bar-button" alt="" src="/vector-1.svg" />
                </div>
              </div>
              <div className="dropdown-input-field">Back</div>
            </button> */}
            {/* <button className="side-bar2">
              <div className="button50">
                <img
                  className="background-icon8"
                  alt=""
                  src="/background-1.svg"
                />
                <div className="signup-text10">Clear List</div>
              </div>
            </button> */}
          </div>
          <div className="row-orders-instance">
            <div className="dropdowns-group">
              {/* <button className="dropdowns7">
                <div className="input-field14">
                  <div className="text62">
                    <div className="dropdown-option2">Dropdown option</div>
                    <img className="filter-icon2" alt="" src="/filter.svg" />
                  </div>
                </div>
              </button> */}
              <div className="export-button-container">
                {/* <button className="export-button2">
                  <img
                    className="sharefill-icon2"
                    alt=""
                    src="/sharefill.svg"
                  />
                  <div className="background71" />
                  <div className="edit-fill-gradient">
                    <div className="text63">Export</div>
                  </div>
                </button> */}
              </div>
              <div className="add-pdt-button-container">
                <button
                  className="add-pdt-button2"
                  onClick={onAddPdtButtonClick}
                >
                  <div className="background72" />
                  <div className="add-product-button">Add new Order+</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="titlebarorders">
          <div className="titlebarorders-child" />
          <div className="id-group">
            <div className="id2">ID</div>
            <div className="type1">Type of order</div>
            <div className="partner1">Partner</div>
            <div className="date2">Date</div>
            <div className="bill1">bill</div>
            <div className="status4">Status</div>
            <div className="payment1">Payment</div>
          </div>
        </div>
      </div>
      <RowOrders onButtonContainerClick={onButtonContainerClick} />
      <RowOrders onButtonContainerClick={onButtonContainer2Click} />
    </div>
  );
};

export default Checkbox;
