import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WarehouseNew.css";

const WarehouseNew = () => {
  const navigate = useNavigate();

  const onWarebuttonsClick = useCallback(() => {
    navigate("/join-warehouse-page");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/create-warehouse-page");
  }, [navigate]);

  return (
    <div className="warehouse-new">
      <div className="no-warehouse">
        <h1 className="text19">OOPS!</h1>
        <div className="subtext-parent">
          <h1 className="subtext">you are not associated with any warehouse</h1>
          <img
            className="errorsign-icon"
            loading="lazy"
            alt=""
            src="/errorsign.svg"
          />
        </div>
        <div className="warebuttons">
          <div className="button19">
            <div className="text20">Join Warehouse</div>
          </div>
          <div className="button20">
            <div className="text21">Create warehouse</div>
          </div>
        </div>
      </div>
      <button className="warebuttons1" onClick={onWarebuttonsClick}>
        <div className="button21">
          <div className="text22">Join Warehouse</div>
        </div>
        <div className="button22">
          <div className="text23">Create warehouse</div>
        </div>
      </button>
      <button className="button23" onClick={onButtonClick}>
        <div className="text24">Create warehouse</div>
      </button>
    </div>
  );
};

export default WarehouseNew;
