import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Dropdowns11.css";

const Dropdowns1 = (dname, dchange) => {
  return (
    <div className="dropdowns9">
      <div className="dropdown-title6">Type of order</div>
      <Form.Select className="input-field-formselect6" onChange={dchange} name={dname}>
        <option>Order</option>
        <option value="Sales">Sales</option>
        <option value="Purchase">Purchase</option>
        <option value="Return">Return</option>
      </Form.Select>
    </div>
  );
};

export default Dropdowns1;
