import { useCallback } from "react";
import TextInputs from "./TextInputs";
import Dropdowns from "./Dropdowns";
import { useNavigate } from "react-router-dom";
import "./NewProduct.css";
//cancel button activated
const NewProduct = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <form className="new-product">
      <h1 className="title16">New  Product</h1>
      <div className="product-form-wrapper">
        <div className="product-form3">
          <TextInputs
            inputTextLabel="Name"
            icon="pending_I25:2468;12:888;12:554"
          />
          <TextInputs
            inputTextLabel="description"
            icon="pending_I25:2468;12:889;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <Dropdowns />
          <TextInputs
            inputTextLabel="Brand"
            icon="pending_I25:2468;12:891;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="Unit Per stock"
            icon="pending_I25:2468;12:892;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="minimum stock"
            icon="pending_I25:2468;12:893;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="Supplier"
            icon="pending_I25:2468;12:894;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="Price"
            icon="pending_I25:2468;12:895;12:554"
            iconColor="#666"
            propColor="#666"
          />
        </div>
      </div>
      <div className="frame-parent12">
        <div className="button-wrapper1">
          <button className="button42" onClick={onButtonClick}>
            <div className="content12">Add</div>
          </button>
        </div>
        <button className="button43" onClick={onButtonClick}>

          <div className="text54">Cancel</div>
        </button>
      </div>
    </form>
  );
};

export default NewProduct;
