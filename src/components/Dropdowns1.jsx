import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Dropdowns.css";

const Dropdowns = (dchange, dname) => {
  return (
    <div className="dropdowns2">
      <div className="dropdown-title2">Partner type</div>
      <Form.Select className="input-field-formselect2" onChange={dchange} name="dname">
        <option>Partner</option>
        <option value="supplier">Supplier</option>
        <option value="distributor">
          distributor
        </option>
        
      </Form.Select>
    </div>
  );
};

export default Dropdowns;
