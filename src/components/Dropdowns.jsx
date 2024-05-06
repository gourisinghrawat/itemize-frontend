import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Dropdowns.css";

const Dropdowns = (dchange, dname, ddis) => {
  return (
    <div className="dropdowns2">
      <div className="dropdown-title2">Company Role</div>
      <Form.Select className="input-field-formselect2" onChange={dchange} name="dname" disabled={ddis}>
        <option>Role</option>
        <option value="'Warehouse Manager'">'Warehouse Manager'</option>
        <option value="'Order Fulfillment Specialist'">
          'Order Fulfillment Specialist'
        </option>
        <option value="'Receiving Clerk'">'Receiving Clerk'</option>
        <option value="'Returns Clerk'">'Returns Clerk'</option>
      </Form.Select>
    </div>
  );
};

export default Dropdowns;
