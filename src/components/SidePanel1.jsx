import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SidePanel1.css";
// in order page
const SidePanel = () => {
  const navigate = useNavigate();

  const onLightContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onLightContainer1Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onLightContainer12Click = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  return (
    <div className="side-panel4">
      <div className="side-pannel3" />
      <div className="light12" onClick={onLightContainerClick}>
        <div className="button-primary24">
          <div className="button-primary25">
            <div className="background65" />
            <div className="dropdown-menu1">Dashboard</div>
          </div>
        </div>
      </div>
      <div className="side-bar-buttons3" onClick={onSideBarButtonsClick}>
        <div className="button48">
          <img className="background-icon7" alt="" src="/background.svg" />
          <div className="signup-text9">Order</div>
        </div>
      </div>
      <div className="light13" onClick={onLightContainer1Click}>
        <div className="button-primary26">
          <div className="button-primary27">
            <div className="background66" />
            <div className="text59">Inventory</div>
          </div>
        </div>
      </div>
      <div className="title-bar-orders">
        <div className="light14">
          <div className="button-primary28">
            <div className="button-primary29">
              <div className="background67" />
              <div className="text60">Partner</div>
            </div>
          </div>
        </div>
        <div className="light15" onClick={onLightContainer12Click}>
          <div className="button-primary30">
            <div className="button-primary31">
              <div className="background68" />
              <div className="text61">Report</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
