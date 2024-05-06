import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import SidePanel from "../components/SidePanel";
import NameCell from "../components/NameCell";
import TransactionBg from "../components/TransactionBg";
import Date1 from "../components/Date1";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLightContainerClick = useCallback(() => {
    navigate("/order-page");
  }, [navigate]);

  const onLightContainer1Click = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  const onLightContainer12Click = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/dashboard-start");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButton3Click = useCallback(() => {
    navigate("/dashboard-user");
  }, [navigate]);

  return (
    <div className="dashboard3">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <b className="title">Hi, Aditi</b>
      <main className="search-icon">
        <SidePanel
        
  onSideBarButtonsClick={onSideBarButtonsClick}
  onLightContainerClick={onLightContainerClick}
  onLightContainer1Click={onLightContainer1Click}
  onLightContainer12Click={onLightContainer12Click}
        />
        <section className="filter-chain-wrapper">
          <div className="filter-chain">
            <img className="rectangle-icon" alt="" src="/rectangle@2x.png" />
            <div className="d-p">
              <div className="rectangle15" />
              
              <div className="amount-label">
                <div className="transaction-row">
                  <div className="header-row">
                    <div className="d-p-cell">
                      <NameCell />
                      <div className="summary">
                        <div className="close-button" />
                        <div className="query-processor-wrapper">
                          <div className="query-processor">
                            <div className="search-tree">
                              <div className="title1">
                                <h3 className="order-summary"> Summary</h3>
                                <div className="from-1-31-march">
                                  From 1-31 March, 2022
                                </div>
                              </div>
                              <div className="d-p-label-cell">
                                <h1 className="title2">warehouse Name</h1>
                              </div>
                            </div>
                            <button className="button">
                              <img className="icon" alt="" src="/icon.svg" />
                              <div className="create-a-contract">
                                warehouseID
                              </div>
                              <img className="icon1" alt="" src="/icon.svg" />
                            </button>
                          </div>
                        </div>
                        <div className="charts">
                          <div className="calendar-date">
                            <TransactionBg
                              order="Purchase"
                              transactionAmount="234"
                              order1="sales"
                              dpLabel="95"
                            />
                            <TransactionBg
                              order="return"
                              transactionAmount="181"
                              order1="return"
                              dpLabel="37"
                              propBackgroundColor="0.2px solid #c9c9c9"
                              propWidth="54px"
                              propMinWidth="38px"
                              propDisplay="unset"
                              propMinWidth1="unset"
                              propAlignSelf="stretch"
                              propBackgroundColor1="#000"
                              propMinWidth2="38px"
                            />
                          </div>
                          <div className="legend" />
                          <div className="pie-chart">
                            <div className="bg" />
                            <div className="div" />
                            <div className="div1" />
                            <div className="div2" />
                            <div className="div3" />
                            <div className="div4">
                              <div className="div5">
                                <span className="span">54</span>
                                <span className="span1">%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input-filter-plus">
                        <div className="date-cell">
                          <button className="button1" onClick={onButton1Click}>
                            <div className="transaction-item-separator">
                              Leave warehouse
                            </div>
                          </button>
                          <button className="button2" onClick={onButton2Click}>
                            <div className="text">Logout</div>
                          </button>
                          <button className="button3" onClick={onButton3Click}>
                            <div className="text1">Edit Profile</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent">
                    <div className="profit-parent">
                      <div className="profit">
                        <div className="transaction-cells-column">Profit</div>
                        <div className="background12" />
                        <b className="title3">
                          <span>2,00,000</span>
                          <span className="rs">Rs</span>
                        </b>
                      </div>
                      <Date1 />
                    </div>
                    <div className="transaction-bg">
                      <div className="background13" />
                      <div className="transaction-item-divider-wrapper">
                        <div className="transaction-item-divider">
                          Transaction History
                        </div>
                      </div>
                      <div className="tid1-parent">
                        <div className="tid1">
                          <div className="transaction-i-d">
                            <div className="function-sequencer-quadruple">
                              <img
                                className="dp-icon"
                                loading="lazy"
                                alt=""
                                src="/dp.svg"
                              />
                            </div>
                            <div className="name">
                              <div className="chloe-wallows">Chloe Wallows</div>
                              <div className="saphore-inc">Saphore Inc.</div>
                            </div>
                          </div>
                          <div className="amount">
                            <div className="saphore-inc-values-label">
                              <div className="amount-value-label">$1,546</div>
                              <div className="shape-container">
                                <div className="tid-icon">.12</div>
                              </div>
                            </div>
                            <div className="may-2022">1 May 2022</div>
                          </div>
                        </div>
                        <div className="transaction-record">
                          <div className="tid2">
                            <div className="transaction-columns">
                              <div className="position-manager">
                                <img
                                  className="dp-icon1"
                                  loading="lazy"
                                  alt=""
                                  src="/dp-1.svg"
                                />
                              </div>
                              <div className="name1">
                                <div className="chloe-wallows1">
                                  Chloe Wallows
                                </div>
                                <div className="saphore-inc1">Saphore Inc.</div>
                              </div>
                            </div>
                            <div className="amount1">
                              <div className="div6">
                                <div className="div7">$1,546</div>
                                <div className="wrapper">
                                  <div className="div8">.12</div>
                                </div>
                              </div>
                              <div className="may-20221">1 May 2022</div>
                            </div>
                          </div>
                          <div className="tid11">
                            <div className="frame-group">
                              <div className="dp-wrapper">
                                <img
                                  className="dp-icon2"
                                  loading="lazy"
                                  alt=""
                                  src="/dp.svg"
                                />
                              </div>
                              <div className="name2">
                                <div className="chloe-wallows2">
                                  Chloe Wallows
                                </div>
                                <div className="saphore-inc2">Saphore Inc.</div>
                              </div>
                            </div>
                            <div className="amount2">
                              <div className="div9">
                                <div className="div10">$1,546</div>
                                <div className="container">
                                  <div className="div11">.12</div>
                                </div>
                              </div>
                              <div className="may-20222">1 May 2022</div>
                            </div>
                          </div>
                          <div className="tid5">
                            <div className="frame-container">
                              <div className="dp-container">
                                <img
                                  className="dp-icon3"
                                  loading="lazy"
                                  alt=""
                                  src="/dp-3.svg"
                                />
                              </div>
                              <div className="name3">
                                <div className="chloe-wallows3">
                                  Chloe Wallows
                                </div>
                                <div className="saphore-inc3">Saphore Inc.</div>
                              </div>
                            </div>
                            <div className="amount3">
                              <div className="div12">
                                <div className="div13">$1,546</div>
                                <div className="frame">
                                  <div className="div14">.12</div>
                                </div>
                              </div>
                              <div className="may-20223">1 May 2022</div>
                            </div>
                          </div>
                          <div className="tid21">
                            <div className="frame-div">
                              <div className="dp-frame">
                                <img
                                  className="dp-icon4"
                                  loading="lazy"
                                  alt=""
                                  src="/dp-1.svg"
                                />
                              </div>
                              <div className="name4">
                                <div className="chloe-wallows4">
                                  Chloe Wallows
                                </div>
                                <div className="saphore-inc4">Saphore Inc.</div>
                              </div>
                            </div>
                            <div className="amount4">
                              <div className="div15">
                                <div className="div16">$1,546</div>
                                <div className="wrapper1">
                                  <div className="div17">.12</div>
                                </div>
                              </div>
                              <div className="may-20224">1 May 2022</div>
                            </div>
                          </div>
                          <div className="tid5-wrapper">
                            <div className="tid51">
                              <div className="transaction-item">
                                <div className="parent-child-tree">
                                  <img
                                    className="dp-icon5"
                                    loading="lazy"
                                    alt=""
                                    src="/dp-3.svg"
                                  />
                                </div>
                                <div className="name5">
                                  <div className="chloe-wallows5">
                                    Chloe Wallows
                                  </div>
                                  <div className="saphore-inc5">
                                    Saphore Inc.
                                  </div>
                                </div>
                              </div>
                              <div className="amount5">
                                <div className="amount-value">
                                  <div className="div18">$1,546</div>
                                  <div className="empty-amount-wrapper">
                                    <div className="empty-amount">.12</div>
                                  </div>
                                </div>
                                <div className="may-20225">1 May 2022</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="error-corrector-plus-plus">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
