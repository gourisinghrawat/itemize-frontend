import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ButtonsInOrder from "../components/ButtonsInOrder";
import "./CreateOrderPage.css";

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
      <header className="navbar3">
        <b className="logo3" onClick={onLogoTextClick}>
          ITEMIZE
        </b>
        <div className="icons1">
          <img
            className="notificationsstyle4-icon1"
            loading="lazy"
            alt=""
            src="/notificationsstyle4.svg"
          />
          <img
            className="person-icon1"
            loading="lazy"
            alt=""
            src="/person.svg"
            onClick={onPersonIconClick}
          />
          <img
            className="reorder-threeoutline-icon1"
            loading="lazy"
            alt=""
            src="/reorderthreeoutline.svg"
          />
        </div>
      </header>
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
