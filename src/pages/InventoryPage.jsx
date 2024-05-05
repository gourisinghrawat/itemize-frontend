import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import FrameComponent2 from "../components/FrameComponent2";
import "./InventoryPage.css";
import SidePanel from "../components/SidePanel2";
const InventoryPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="inventory-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
           
      <FrameComponent2 />
    </div>
  );
};

export default InventoryPage;
