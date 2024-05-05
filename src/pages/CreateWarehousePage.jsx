import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import WarehouseNew1 from "../components/WarehouseNew1";
import "./CreateWarehousePage.css";
import Navbar1 from "../components/Navbar1";

const CreateWarehousePage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="create-warehouse-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <div className="dashboard1">
        <div className="rectangle5" />
        <img
          className="warehouse-workers-using-laptop1"
          alt=""
          src="/warehouse-workers-using-laptop5-2-1@2x.png"
        />
        <div className="rectangle6" />
        <div className="dashboard-content1">
          <div className="look-into-your-group">
            <div className="look-into-your1">Look Into Your</div>
            <div className="if-you-dont1">
              “If you don’t try this app, you won’t become the superhero you
              were meant to be”
            </div>
          </div>
          <div className="card-1-group">
            <div className="card-11">
              <div className="content3">
                <div className="background4" />
                <div className="suppliers1">Suppliers</div>
                <div className="see-more3">See More ›</div>
              </div>
              <div className="rectangle7" />
              <div className="card-1-item" />
            </div>
            <div className="card-21">
              <div className="media2">
                <div className="rectangle8" />
                <div className="media-item" />
              </div>
              <div className="content4">
                <div className="background5" />
                <div className="warehouses1">{`Warehouses `}</div>
                <div className="see-more4">See More ›</div>
              </div>
            </div>
            <div className="card-31">
              <div className="rectangle9" />
              <div className="card-3-item" />
              <div className="content5">
                <div className="background6" />
                <div className="distributors1">{`Distributors `}</div>
                <div className="see-more5">See More ›</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="blurbg-icon1" alt="" src="/blurbg.svg" />
      <div className="warehouse-new-container">
        <WarehouseNew1 />
      </div>
    </div>
  );
};

export default CreateWarehousePage;
