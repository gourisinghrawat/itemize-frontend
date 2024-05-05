import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";
import "./FrameComponent2.css";
import Filter from "./filter";
import SidePanel2 from "../components/SidePanel2";
const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/edit-stock-page");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    navigate("/viewpdt-page");
  }, [navigate]);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/edit-stock-page");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/viewpdt-page");
  }, [navigate]);

  const onLightContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLightContainer1Click = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onLightContainer12Click = useCallback(() => {
    navigate("/partner-page");
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
                
                  {/* <button className="back-button4">
                    <div className="background54" />
                    <div className="back-button-inner2">
                      <div className="vector-container">
                        <img
                          className="vector-icon5"
                          alt=""
                          src="/vector.svg"
                        />
                        <img
                          className="vector-icon6"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                    <div className="side-panel-instance">Back</div>
                  </button> */}
                  {/* <div className="side-bar1">
                    <div className="button41">
                      <img
                        className="background-icon6"
                        alt=""
                        src="/background-1.svg"
                      />
                      <div className="signup-text8">Clear List</div>
                    </div>
                  </div> */}
                </div>
              </div>
              
              <div className="dropdown-instance-parent">
              <input className="searchpdt" placeholder="search"
                  type="search"
                />
              <Filter/>
                {/*<div className="dropdown-instance">
                  <div className="dropdowns5">
                    <div className="input-field11">
                      <div className="text51">
                        <input
                          className="dropdown-option1"
                          placeholder="Dropdown option"
                          type="text"
                        />
                        <img
                          className="filter-icon1"
                          alt=""
                          src="/filter.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>*/}
                
                  {/* 
                  <div className="product-rows">
                  <button className="export-button1">
                    <img
                      className="sharefill-icon1"
                      alt=""
                      src="/sharefill.svg"
                    />
                    <div className="background55" />
                    <div className="product-rows1">
                      <div className="product-rows2">Export</div>
                    </div>
                  </button></div> */}
                
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

const pdtdata=[{id:88888, name:"toothpaste", brand:"colgate", supplier:"s1", price:234,status:"in stock", stock:23},
{id:1, name:"toothpaste", brand:"colgate", supplier:"s1", price:234,status:"in stock", stock:23},
{id:1, name:"toothpaste", brand:"colgate", supplier:"s1trhtyrtyrtryt", price:234,status:"in stock", stock:23}
]