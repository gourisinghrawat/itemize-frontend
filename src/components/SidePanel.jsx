import "./SidePanel.css";
//copy of side panel 1
//delete
const SidePanel = ({
  onSideBarButtonsClick,
  onLightContainerClick,
  onLightContainer1Click,
  onLightContainer12Click,
}) => {
  return (
    <div className="side-panel">
      <div className="side-pannel" />
      <div className="side-bar-buttons" onClick={onSideBarButtonsClick}>
        <div className="button32">
          <img
            className="background-icon2"
            loading="lazy"
            alt=""
            src="/background.svg"
          />
          <div className="signup-text4">Dashboard</div>
        </div>
      </div>
      <div className="light" onClick={onLightContainerClick}>
        <div className="button-primary">
          <div className="button-primary1">
            <div className="background32" />
            <div className="amount-label1">Orders</div>
          </div>
        </div>
      </div>
      <div className="light1" onClick={onLightContainer1Click}>
        <div className="button-primary2">
          <div className="button-primary3">
            <div className="background33" />
            <div className="text32">Inventory</div>
          </div>
        </div>
      </div>
      <div className="data-stream">
        <div className="light2">
          <div className="button-primary4">
            <div className="button-primary5">
              <div className="background34" />
              <div className="text33">Partner</div>
            </div>
          </div>
        </div>
        <div className="light3" onClick={onLightContainer12Click}>
          <div className="button-primary6">
            <div className="button-primary7">
              <div className="background35" />
              <div className="text34">Report</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
