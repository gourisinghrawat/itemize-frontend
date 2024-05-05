import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import StocksviewEdit from "../components/StocksviewEdit";
import "./ViewpdtPAGE.css";

const ViewpdtPAGE = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="viewpdt-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon5" alt="" src="/blurbg.svg" />
      <div className="stock-view-edit">
        <StocksviewEdit />
      </div>
    </div>
  );
};

export default ViewpdtPAGE;
