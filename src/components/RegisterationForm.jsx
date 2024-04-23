import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Credentials from "./Credentials";
import { useNavigate } from "react-router-dom";
import "./RegisterationForm.css";

const RegisterationForm = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/dashboard-start");
  }, [navigate]);

  return (
    <form className="registeration-form">
      <div className="background25" />
      <div className="logo-frame">
        <h2 className="logo6">rEGISTER</h2>
      </div>
      <div className="credentials-group">
        <Credentials
          inputTextLabel="Name"
          typeHerePlaceholder="name"
          icon="pending_I113:4406;113:4270;3:258;1:38"
        />
        <Credentials
          inputTextLabel="Email"
          typeHerePlaceholder="Email"
          icon="pending_I113:4406;113:4271;3:258;1:38"
        />
        <Credentials
          inputTextLabel="Phone Number"
          typeHerePlaceholder="Phone Number"
          icon="pending_I113:4406;113:4272;3:258;1:38"
        />
        <div className="dropdowns">
          <div className="dropdown-title">Company Role</div>
          <Form.Select className="input-field-formselect">
            <option>Company Role</option>
            <option value="'Warehouse Manager'">'Warehouse Manager'</option>
            <option value="'Order Fulfillment Specialist'">
              'Order Fulfillment Specialist'
            </option>
            <option value="'Receiving Clerk'">'Receiving Clerk'</option>
            <option value="'Returns Clerk'">'Returns Clerk'</option>
          </Form.Select>
        </div>
        <Credentials
          inputTextLabel="password"
          typeHerePlaceholder="Enter username"
          icon="pending_I113:4406;113:4274;3:258;1:38"
        />
        <Credentials
          inputTextLabel="Confirm Password"
          typeHerePlaceholder="Enter username"
          icon="pending_I113:4406;113:4275;3:258;1:38"
        />
      </div>
      <div className="button-container">
        <button className="button18" onClick={onButtonClick}>
          <div className="input-field-instance">Register</div>
          <div className="background26" />
        </button>
      </div>
    </form>
  );
};

export default RegisterationForm;
