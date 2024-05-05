import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonsInOrder from "../components/ButtonsInOrder";
import "./CreateOrderPage.css";
import Navbar1 from "../components/Navbar1";

const CreateOrderPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="create-order-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon9" alt="" src="/blurbg.svg" />
      <div className="edit-order-form-container">
        <div className="edit-order-form2">
          <ButtonsInOrder />
        </div>
      </div>
    </div>
  );
};

export default CreateOrderPage;
