import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Dropdowns3.css";

const Dropdowns = ({ dropdownTitle }) => {
  return (
    <div className="dropdowns8">
      <div className="dropdown-title5">{dropdownTitle}</div>
      <Form.Select className="input-field-formselect5">
        <option>Order</option>
        <option value="Purchase">Purchase</option>
        <option value="Sales">Sales</option>
        <option value="Return">Return</option>
      </Form.Select>
    </div>
  );
};

export default Dropdowns;
