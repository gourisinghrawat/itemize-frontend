import CartRows from "./CartRows";
import "./FrameComponent3.css";

const FrameComponent = () => {
  return (
    <div className="f-r-a-m-e">
      <div className="f-r-a-m-e1">
        <div className="f-r-a-m-e2">
          <div className="f-r-a-m-e3">
            <h2 className="order-id">Order Id</h2>
            <div className="order-type">Order Type</div>
          </div>
          <div className="i-n-s-t-a-n-c-e">
            {/* <img
              className="close-circle-icon2"
              loading="lazy"
              alt=""
              src="/closecircle.svg"
            /> */}
          </div>
        </div>
        <div className="cart-title-bar-parent">
          <div className="cart-title-bar">
            <div className="cart-title-bar-child" />
            <div className="f-r-a-m-e4">
              <div className="id3">ID</div>
              <div className="product">Product</div>
              <div className="quantity">quantity</div>
              <div className="price1">Price</div>
            </div>
            <img className="close-circle-icon3" alt="" src="/closecircle.svg" />
          </div>
          <CartRows />
          <CartRows />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
