import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import WarehouseNew from "../components/WarehouseNew";
import "./DashboardStart.css";

const DashboardStart = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="dashboard-start">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <div className="dashboard">
        <div className="rectangle" />
        <img
          className="warehouse-workers-using-laptop"
          alt=""
          src="/warehouse-workers-using-laptop5-2-1@2x.png"
        />
        <div className="rectangle1" />
        <div className="dashboard-content">
          <div className="look-into-your-parent">
            <div className="look-into-your">Look Into Your</div>
            <div className="if-you-dont">
              “If you don’t try this app, you won’t become the superhero you
              were meant to be”
            </div>
          </div>
          <div className="card-1-parent">
            <div className="card-1">
              <div className="content">
                <div className="background1" />
                <div className="suppliers">Suppliers</div>
                <div className="see-more">See More ›</div>
              </div>
              <div className="rectangle2" />
              <div className="card-1-child" />
            </div>
            <div className="card-2">
              <div className="media1">
                <div className="rectangle3" />
                <div className="media-child" />
              </div>
              <div className="content1">
                <div className="background2" />
                <div className="warehouses">{`Warehouses `}</div>
                <div className="see-more1">See More ›</div>
              </div>
            </div>
            <div className="card-3">
              <div className="rectangle4" />
              <div className="card-3-child" />
              <div className="content2">
                <div className="background3" />
                <div className="distributors">{`Distributors `}</div>
                <div className="see-more2">See More ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="blurbg-icon" alt="" src="/blurbg.svg" />
      <div className="warehouse-new-wrapper">
        <WarehouseNew />
      </div>
    </div>
  );
};

export default DashboardStart;
