import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PartnerTableTitle from "./PartnerTableTitle";
import "./FrameComponent11.css";

const FrameComponent11 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/view-order-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/view-order-page");
  }, [navigate]);

  const onLightContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLightClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onLight1Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onAddPdtButtonClick = useCallback(() => {
    navigate("/new-partner-page");
  }, [navigate]);

  return (
    <section className="side-panel-container">
      <div className="side-panel1">
        <div className="side-pannel1" />
        <div className="light4" onClick={onLightContainerClick}>
          <div className="button-primary8">
            <div className="button-primary9">
              <div className="background38" />
              <div className="text36">Dashboard</div>
            </div>
          </div>
        </div>
        <button className="light5" onClick={onLightClick}>
          <div className="button-primary10">
            <div className="button-primary11">
              <div className="background39" />
              <div className="text37">Orders</div>
            </div>
          </div>
        </button>
        <button className="light6" onClick={onLight1Click}>
          <div className="button-primary12">
            <div className="button-primary13">
              <div className="background40" />
              <div className="text38">Inventory</div>
            </div>
          </div>
        </button>
        <div className="light-parent">
          <div className="light7">
            <div className="button-primary14">
              <div className="button-primary15">
                <div className="background41" />
                <div className="text39">Partner</div>
              </div>
            </div>
          </div>
          <div className="side-bar-buttons1" onClick={onSideBarButtonsClick}>
            <div className="button34">
              <img
                className="background-icon3"
                loading="lazy"
                alt=""
                src="/background.svg"
              />
              <div className="signup-text5">Partner</div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper5">
        <div className="frame-parent9">
          <div className="frame-parent10">
            <div className="back-button-parent">
              <button className="back-button2">
                <div className="background42" />
                <div className="back-button-child">
                  <div className="vector-group">
                    <img className="vector-icon3" alt="" src="/vector.svg" />
                    <img className="side-bar-icon" alt="" src="/vector-1.svg" />
                  </div>
                </div>
                <div className="text40">Back</div>
              </button>
              <button className="side-bar">
                <div className="button35">
                  <img
                    className="background-icon4"
                    alt=""
                    src="/background-1.svg"
                  />
                  <div className="signup-text6">Clear List</div>
                </div>
              </button>
            </div>
            <div className="frame-wrapper6">
              <div className="dropdowns-parent">
                <button className="dropdowns3">
                  <div className="input-field9">
                    <div className="text41">
                      <div className="dropdown-option">Dropdown option</div>
                      <img className="filter-icon" alt="" src="/filter.svg" />
                    </div>
                  </div>
                </button>
                <div className="export-button-wrapper">
                  <button className="export-button">
                    <img
                      className="sharefill-icon"
                      alt=""
                      src="/sharefill.svg"
                    />
                    <div className="background43" />
                    <div className="text-container">
                      <div className="text42">Export</div>
                    </div>
                  </button>
                </div>
                <div className="add-pdt-button-wrapper">
                  <button
                    className="add-pdt-button"
                    onClick={onAddPdtButtonClick}
                  >
                    <div className="background44" />
                    <div className="text43">Add new Partner+</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper7">
            <div className="partner-title-parent">
              <div className="partner-title">
                <div className="partner-title-child" />
                <div className="id-parent">
                  <div className="id">ID</div>
                  <div className="type">Type</div>
                  <div className="partner">Partner</div>
                  <div className="date1">email</div>
                  <div className="bill">contact</div>
                  <div className="status">Status</div>
                  <div className="payment">Payment</div>
                </div>
              </div>
              <div className="partner-table-title-parent">
                <PartnerTableTitle
                  onButtonContainerClick={onButtonContainerClick}
                />
                <PartnerTableTitle
                  onButtonContainerClick={onButtonContainer2Click}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
