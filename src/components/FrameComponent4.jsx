import CartRows from "./CartRows";
import "./FrameComponent4.css";

const FrameComponent = () => {
  return (
    <div className="edit-cart-page-inner">
      <div className="close-circle-parent">
        {/* <img
          className="close-circle-icon4"
          loading="lazy"
          alt=""
          src="/closecircle.svg"
        /> */}
        <div className="cart-title-bar1">
          <div className="i-d-holder">
            <div className="sales-and-type">
              <h2 className="order-id1">Order Id</h2>
              <div className="order-type1">Order Type</div>
            </div>
            <div className="order-type2">
              <button className="add-pdt-button3">
                <div className="text67">Add Item</div>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-title-bar-group">
          <div className="cart-title-bar2">
            <div className="cart-title-bar-item" />
            <div className="id-container">
              <div className="id4">ID</div>
              <div className="product1">Product</div>
              <div className="quantity1">quantity</div>
              <div className="price2">Price</div>
            </div>
            <img className="close-circle-icon5" alt="" src="/closecircle.svg" />
          </div>
          <CartRows />
          <CartRows />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
