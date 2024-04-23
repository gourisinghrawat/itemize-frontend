import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SidePanel from "../components/SidePanel";
import Checkbox from "../components/Checkbox";
import "./OrderPage.css";

const OrderPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="order-page">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <section className="side-panel-group">
        <SidePanel />
        <div className="checkbox-wrapper">
          <Checkbox />
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
