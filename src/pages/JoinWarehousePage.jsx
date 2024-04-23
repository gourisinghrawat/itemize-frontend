import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import FrameComponent from "../components/FrameComponent";
import "./JoinWarehousePage.css";

const JoinWarehousePage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="join-warehouse-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <div className="dashboard2">
        <div className="rectangle10" />
        <img
          className="warehouse-workers-using-laptop2"
          alt=""
          src="/warehouse-workers-using-laptop5-2-1@2x.png"
        />
        <div className="rectangle11" />
        <div className="dashboard-content2">
          <div className="look-into-your-container">
            <div className="look-into-your2">Look Into Your</div>
            <div className="if-you-dont2">
              “If you don’t try this app, you won’t become the superhero you
              were meant to be”
            </div>
          </div>
          <div className="card-1-container">
            <div className="card-12">
              <div className="content6">
                <div className="background7" />
                <div className="suppliers2">Suppliers</div>
                <div className="see-more6">See More ›</div>
              </div>
              <div className="rectangle12" />
              <div className="card-1-inner" />
            </div>
            <div className="card-22">
              <div className="media3">
                <div className="rectangle13" />
                <div className="media-inner" />
              </div>
              <div className="content7">
                <div className="background8" />
                <div className="warehouses2">{`Warehouses `}</div>
                <div className="see-more7">See More ›</div>
              </div>
            </div>
            <div className="card-32">
              <div className="rectangle14" />
              <div className="card-3-inner" />
              <div className="content8">
                <div className="background9" />
                <div className="distributors2">{`Distributors `}</div>
                <div className="see-more8">See More ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="blurbg-icon2" alt="" src="/blurbg.svg" />
      <FrameComponent />
    </div>
  );
};

export default JoinWarehousePage;
