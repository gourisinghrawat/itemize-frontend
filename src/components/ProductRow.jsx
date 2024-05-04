import { useMemo } from "react";
import "./ProductRow.css";

const ProductRow = ({
  propAlignSelf,
  propWidth,
  propFlexWrap,
  onButtonContainerClick,
  onButtonContainer2Click, pdt
}) => {
  const productRowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div className="product-row" style={productRowStyle}>
      <div className="product-row-child" />
      <div className="product-button-parent" style={frameDivStyle}>
        <div className="product-button">
          <div className="div22">{pdt.id}</div>
        </div>
        <div className="product-button1">
          <div className="product-a">{pdt.name}</div>
        </div>
        <div className="product-button2">
          <div className="lorem-ipsum1">{pdt.brand}</div>
        </div>
        <div className="product-button3">
          <div className="div23">{pdt.supplier}</div>
        </div>
        <div className="product-button4">
          <div className="div24">{pdt.price}</div>
        </div>
        <div className="status1">
          <img className="vector-icon4" alt="" src="/vector-2.svg" />
          <div className="in-stock">{pdt.status}</div>
        </div>
        <div className="product-button5">
          <div className="div25">{pdt.stock}</div>
        </div>
        <div className="product-button6">
          <div className="button38" onClick={onButtonContainerClick}>
            <div className="delete-edit-vecs">Edit Stock</div>
            <div className="background48" />
          </div>
        </div>
        <div className="product-button7">
          <div className="button39" onClick={onButtonContainer2Click}>
            <div className="text47">View</div>
            <div className="background49" />
          </div>
        </div>
        <div className="edit-delete-container">
          <div className="edit-delete">
            <img
              className="delete-fill0-wght400-grad0-ops-icon"
              loading="lazy"
              alt=""
              src="/edit-delete.svg"
            />
            <img
              className="edit-fill0-wght400-grad0-opsz2-icon"
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

export default ProductRow;

const pdtdata=[{id:1, name:"toothpaste", brand:"colgate", supplier:"s1", price:234,status:"in stock", stock:23}]