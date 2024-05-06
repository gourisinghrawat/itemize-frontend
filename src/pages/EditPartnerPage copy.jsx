import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import EditPartner from "../components/editpartner";
import "./NewPartnerPage.css";

const EditPartnerPage = () => {
  const navigate = useNavigate();

  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="new-partner-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon3" alt="" src="/blurbg.svg" />
      <div className="add-partner-wrapper">
        <EditPartner />
      </div>
    </div>
  );
};

export default EditPartnerPage;
