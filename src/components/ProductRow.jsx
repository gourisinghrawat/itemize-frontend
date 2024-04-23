import { useMemo } from "react";
import "./ProductRow.css";

const ProductRow = ({
  propAlignSelf,
  propWidth,
  propFlexWrap,
  onButtonContainerClick,
  onButtonContainer2Click,
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
          <div className="div22">1</div>
        </div>
        <div className="product-button1">
          <div className="product-a">product A</div>
        </div>
        <div className="product-button2">
          <div className="lorem-ipsum1">lorem ipsum</div>
        </div>
        <div className="product-button3">
          <div className="div23">200</div>
        </div>
        <div className="product-button4">
          <div className="div24">400</div>
        </div>
        <div className="status1">
          <img className="vector-icon4" alt="" src="/vector-2.svg" />
          <div className="in-stock">in stock</div>
        </div>
        <div className="product-button5">
          <div className="div25">40</div>
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
