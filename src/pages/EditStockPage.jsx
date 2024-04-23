import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FrameComponent12 from "../components/FrameComponent12";
import "./EditStockPage.css";

const EditStockPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="edit-stock-page">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon6" alt="" src="/blurbg.svg" />
      <FrameComponent12 />
    </div>
  );
};

export default EditStockPage;
