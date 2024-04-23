import { useCallback } from "react";
import TextInputs1 from "./TextInputs1";
import Dropdowns1 from "./Dropdowns1";
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
          <TextInputs1
            inputTextLabel="Name"
            icon="pending_I37:2205;37:2025;12:554"
          />
          <Dropdowns1 />
          <TextInputs1
            inputTextLabel="Email"
            icon="pending_I37:2205;37:2052;12:554"
          />
          <TextInputs1
            inputTextLabel="Contact Number"
            icon="pending_I37:2205;37:2061;12:554"
          />
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
