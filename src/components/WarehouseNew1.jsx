import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import TextInputs from "./TextInputs";
import { useNavigate } from "react-router-dom";
import "./WarehouseNew1.css";

const WarehouseNew1 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <form className="warehouse-new1">
      <div className="background28" />
      <div className="title11">
        <div className="content11">
          <h1 className="title12">New Warehouse</h1>
          <div className="product-form2">
            <TextInputs
              inputTextLabel="Name"
              icon="pending_I136:2361;25:2095;15:5884"
            />
            <TextInputs
              inputTextLabel="Address"
              icon="pending_I136:2361;25:2096;15:5884"
            />
            <div className="dropdowns1">
              <div className="dropdown-title1">State</div>
              <Form.Select className="input-field-formselect1">
                <option>State/ Ut</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Tripura">Tripura</option>
                <option value="Telangana">Telangana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option
                  value={`Andaman & Nicobar (UT)`}
                >{`Andaman & Nicobar (UT)`}</option>
                <option value="Chandigarh (UT)">Chandigarh (UT)</option>
                <option
                  value={`Dadra & Nagar Haveli (UT)`}
                >{`Dadra & Nagar Haveli (UT)`}</option>
                <option value={`Daman & Diu (UT)`}>{`Daman & Diu (UT)`}</option>
                <option
                  value={`Jammu & Kashmir(UT)`}
                >{`Jammu & Kashmir(UT)`}</option>
                <option value="Lakshadweep (UT)">Lakshadweep (UT)</option>
                <option value="Ladakh (UT)">Ladakh (UT)</option>
                <option value="Puducherry (UT)">Puducherry (UT)</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-button">
        <div className="button24" onClick={onButtonContainerClick}>
          <button className="button25">
            <div className="signup-text2">Create</div>
          </button>
        </div>
        <div className="button26">
          <button className="button27">
            <div className="text26">Cancel</div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default WarehouseNew1;
