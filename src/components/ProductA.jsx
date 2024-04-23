import { useMemo } from "react";
import "./ProductA.css";

const ProductA = ({ propAlignSelf, propWidth }) => {
  const productAStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="product-a1" style={productAStyle}>
      <h2 className="product-a2">Product A</h2>
      <div className="product-id">product id</div>
      <div className="status3">
        <img className="in-stock-icon" alt="" src="/vector-2.svg" />
        <div className="in-stock1">in stock</div>
      </div>
    </div>
  );
};

export default ProductA;
