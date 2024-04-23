import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewProduct from "../components/NewProduct";
import "./NewProductPage.css";

const NewProductPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="new-product-page">
      <Navbar
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon4" alt="" src="/blurbg.svg" />
      <div className="new-product-wrapper">
        <NewProduct />
      </div>
    </div>
  );
};

export default NewProductPage;
