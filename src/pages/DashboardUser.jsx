import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidePanel from "../components/SidePanel";
import NameCell from "../components/NameCell";
import Dropdowns from "../components/Dropdowns";
import Date1 from "../components/Date1";
import "./DashboardUser.css";

const DashboardUser = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSideBarButtonsClick = useCallback(() => {
    navigate("/order-page");
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

  const onButtonClick = useCallback(() => {
    navigate("/dashboard-start");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="dashboard-user">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <b className="title4">Hi, Aditi</b>
      <main className="side-panel-parent">
        <SidePanel
          onSideBarButtonsClick={onSideBarButtonsClick}
          onLightContainerClick={onLightContainerClick}
          onLightContainer1Click={onLightContainer1Click}
          onLightContainer12Click={onLightContainer12Click}
        />
        <section className="frame-wrapper">
          <div className="rectangle-parent">
            <img className="rectangle-icon1" alt="" src="/rectangle@2x.png" />
            <div className="rectangle-group">
              <div className="rectangle16" />
              <button className="back-button1">
                <div className="background14" />
                <div className="back-button-inner">
                  <div className="vector-parent">
                    <img className="vector-icon1" alt="" src="/vector.svg" />
                    <img className="vector-icon2" alt="" src="/vector-1.svg" />
                  </div>
                </div>
                <div className="text3">Back</div>
              </button>
              <div className="frame-wrapper1">
                <div className="frame-parent1">
                  <div className="frame-wrapper2">
                    <div className="frame-parent2">
                      <NameCell />
                      <form className="frame-form">
                        <div className="credentials-parent">
                          <div className="credentials">
                            <div className="username">
                              <div className="input-text-label">Name</div>
                              <div className="input-field">
                                <div className="text4">
                                  <input
                                    className="type-here"
                                    placeholder="name"
                                    type="text"
                                  />
                                  <img className="icon2" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="credentials1">
                            <div className="username1">
                              <div className="input-text-label1">Email</div>
                              <div className="input-field1">
                                <div className="text5">
                                  <input
                                    className="type-here1"
                                    placeholder="Email"
                                    type="text"
                                  />
                                  <img className="icon3" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="credentials2">
                            <div className="username2">
                              <div className="input-text-label2">
                                Phone Number
                              </div>
                              <div className="input-field2">
                                <div className="text6">
                                  <input
                                    className="type-here2"
                                    placeholder="Phone Number"
                                    type="text"
                                  />
                                  <img className="icon4" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <Dropdowns />
                          <div className="credentials3">
                            <div className="username3">
                              <div className="input-text-label3">password</div>
                              <div className="input-field3">
                                <div className="text7">
                                  <input
                                    className="type-here3"
                                    placeholder="Enter username"
                                    type="text"
                                  />
                                  <img className="icon5" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="credentials4">
                            <div className="username4">
                              <div className="input-text-label4">
                                Confirm Password
                              </div>
                              <div className="input-field4">
                                <div className="text8">
                                  <input
                                    className="type-here4"
                                    placeholder="Enter username"
                                    type="text"
                                  />
                                  <img className="icon6" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-wrapper">
                          <div className="button4">
                            <button className="button5" onClick={onButtonClick}>
                              <div className="call-to-action">
                                Leave warehouse
                              </div>
                            </button>
                            <div className="button-parent">
                              <button
                                className="button6"
                                onClick={onButton1Click}
                              >
                                <div className="text9">Save changes</div>
                              </button>
                              <button
                                className="button7"
                                onClick={onButton2Click}
                              >
                                <div className="text10">Cancel</div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <Date1
                    propFlex="unset"
                    propMinWidth="unset"
                    propWidth="228px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardUser;
