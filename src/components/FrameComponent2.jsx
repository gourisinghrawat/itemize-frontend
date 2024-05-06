import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";
import "./FrameComponent2.css";
import Filter from "./filter";
import SidePanel2 from "../components/SidePanel2";
import pdtdata from "./productdata";
const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/edit-stock-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/viewpdt-page");
  }, [navigate]);

  const onAddPdtButtonClick = useCallback(() => {
    navigate("/new-product-page");
  }, [navigate]);

  return (
    <section className="frame-section">
      <div className="side-panel-parent1">
        <SidePanel2/>
        <div className="frame-parent11">
        
          <div className="back-button-group">
            <div className="back-button3">
              <div className="back-button-inner1">
                <div className="back-button-container">
                </div>
              </div>
              
              <div className="dropdown-instance-parent">
              <input className="searchpdt" placeholder="search"
                  type="search"
                />
              <Filter/>
                
                <div className="add-pdt-button1" onClick={onAddPdtButtonClick}>
                  <div className="background56" />
                  <div className="text52">Add New Product +</div>
                </div>
              </div>
            </div>
            <div className="titlebar">
              <div className="title-bar">
                <div className="title-bar-instance" />
                <div className="i-d-name-brand">
                  <div className="id1">ID</div>
                  <div className="name6">Name</div>
                  <div className="brand">brand</div>
                  <div className="supplier">Supplier</div>
                  <div className="price">Price</div>
                  <div className="status2">Status</div>
                  <div className="stocks">Stocks</div>
                </div>
              </div>
            </div>
          </div>
          {pdtdata.map((val, key) => {
                    return (
          <ProductRow
            onButtonContainerClick={onButtonContainerClick}
            onButtonContainer2Click={onButtonContainer2Click}
            pdt={val}
          />)})}
        </div>
      </div>
      
    </section>
  );
};

export default FrameComponent;

