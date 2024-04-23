import "./PartnerTableTitle.css";

const PartnerTableTitle = ({ onButtonContainerClick }) => {
  return (
    <div className="partner-table-title">
      <div className="partner-table-title-child" />
      <div className="frame-parent8">
        <div className="wrapper2">
          <div className="div19">12</div>
        </div>
        <div className="sales-wrapper">
          <div className="sales">Sales</div>
        </div>
        <div className="lorem-ipsum-wrapper">
          <div className="lorem-ipsum">lorem ipsum</div>
        </div>
        <div className="wrapper3">
          <div className="div20">12/12/2024</div>
        </div>
        <div className="wrapper4">
          <div className="div21">400</div>
        </div>
        <div className="checkbox">
          <img className="checkbox-icon" alt="" src="/checkbox.svg" />
          <div className="unchecked">Completed</div>
        </div>
        <div className="button33" onClick={onButtonContainerClick}>
          <div className="text35">Edit</div>
          <div className="background37" />
        </div>
        <div className="edit-delete-wrapper">
          <img
            className="edit-delete-icon"
            loading="lazy"
            alt=""
            src="/edit-delete.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerTableTitle;
