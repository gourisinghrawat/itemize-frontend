import "./RowOrders.css";

const RowOrders = ({ onButtonContainerClick }) => {
  return (
    <div className="row-orders">
      <div className="row-orders-child" />
      <div className="frame-parent13">
        <div className="wrapper5">
          <div className="div26">1</div>
        </div>
        <div className="sales-container">
          <div className="sales1">Sales</div>
        </div>
        <div className="lorem-ipsum-container">
          <div className="lorem-ipsum2">lorem ipsum</div>
        </div>
        <div className="wrapper6">
          <div className="div27">12/12/2024</div>
        </div>
        <div className="wrapper7">
          <div className="div28">400</div>
        </div>
        <div className="order-wrapper">
          <div className="order2">order</div>
        </div>
        <div className="checkbox1">
          <input className="checkbox2" type="checkbox" />
          <div className="unchecked1">Completed</div>
        </div>
        <div className="button-wrapper2">
          <div className="button49" onClick={onButtonContainerClick}>
            <div className="delete-fill-gradient">View</div>
            <div className="background69" />
          </div>
        </div>
        <div className="edit-delete-frame">
          <div className="edit-delete1">
            <img
              className="delete-fill0-wght400-grad0-ops-icon1"
              loading="lazy"
              alt=""
              src="/edit-delete.svg"
            />
            <img
              className="edit-fill0-wght400-grad0-opsz2-icon1"
              loading="lazy"
              alt=""
              src="/edit-fill0-wght400-grad0-opsz24-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowOrders;
