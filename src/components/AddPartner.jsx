import { useCallback } from "react";
import TextInputs1 from "./TextInputs1";
import Dropdowns1 from "./Dropdowns1";
import Credentials from "./Credentials";
import { useNavigate } from "react-router-dom";
import "./AddPartner.css";

const AddPartner = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  return (
    <form className="add-partner">
      <div className="background45" />
      <div className="title-container">
        <h1 className="title15">New Partner</h1>
        <div className="new-partner">
          <Credentials inputTextLabel="Name"
          idval="partnerName"
          typeHerePlaceholder="Full name"
          input_type="text"/>
          <Dropdowns1 />
          <Credentials inputTextLabel="enter your Email"
          idval="partneremail"
          typeHerePlaceholder="email"
          input_type="email"/>
          <Credentials inputTextLabel="contact"
          idval="partnerNo"
          typeHerePlaceholder="phone no."
          input_type="text"/>
        </div>
      </div>
      <div className="button-parent2">
        <button className="button36" onClick={onButtonClick}>
          <div className="text45">Create</div>
          <div className="background46" />
        </button>
        <button className="button37">
          <div className="text46">Cancel</div>
          <div className="background47" />
        </button>
      </div>
    </form>
  );
};

export default AddPartner;
