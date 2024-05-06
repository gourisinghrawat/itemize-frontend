import { useCallback } from "react";
import ProductA from "./ProductA";
import TextInputs from "./TextInputs";
import Dropdowns2 from "./Dropdowns2";
import { useNavigate } from "react-router-dom";
import "./StocksviewEdit.css";

const StocksviewEdit = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <div className="stocksview-edit">
      <div className="stock-interface">
        <div className="background57" />
        <div className="product-a-wrapper">
          <ProductA />
        </div>
        {/* <img className="close-circle-icon" alt="" src="/closecircle.svg" />
        <img
          className="close-circle-icon1"
          loading="lazy"
          alt=""
          src="/closecircle.svg"
        /> */}
      </div>
      <ProductA propAlignSelf="unset" propWidth="256px" />
      <form className="background58">
        <div className="pdt-details">
          <TextInputs
            inputTextLabel="Name"
            icon="pending_I25:2799;25:1637;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="Price"
            icon="pending_I25:2799;25:1645;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="Description"
            icon="pending_I25:2799;25:1653;12:554"
            iconColor="#666"
            propColor="#666"
          />
          <TextInputs
            inputTextLabel="Supplier"
            icon="pending_I25:2799;12:669;12:554"
            iconColor="#404040"
            propColor="#404040"
          />
          <TextInputs
            inputTextLabel="Minimum stock"
            icon="pending_I25:2799;12:670;12:554"
            iconColor="#404040"
            propColor="#404040"
          />
          <TextInputs
            inputTextLabel="Current Stock"
            icon="pending_I25:2799;12:671;12:554"
            iconColor="#404040"
            propColor="#404040"
          />
          <TextInputs
            inputTextLabel="Brand"
            icon="pending_I25:2799;12:672;12:554"
            iconColor="#404040"
            propColor="#404040"
          />
          <Dropdowns2 propColor="#404040" />
        </div>
        <div className="p-d-t-button">
          <button className="button44" onClick={onButton1Click}>
            <div className="background59">Save</div>
            <div className="background60" />
          </button>
          <button className="button45" onClick={onButton1Click}>
            <div className="text55">Close</div>
            <div className="background61" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default StocksviewEdit;
