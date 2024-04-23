import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Dropdowns1.css";

const Dropdowns1 = () => {
  return (
    <div className="dropdowns4">
      <div className="dropdown-title3">Dropdown Title</div>
      <Form.Select className="input-field-formselect3">
        <option>Partner</option>
        <option value="'Supplier'">'Supplier'</option>
        <option value="'Distributor'">'Distributor'</option>
      </Form.Select>
    </div>
  );
};

export default Dropdowns1;
