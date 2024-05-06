import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./filter.css";

const Filter = () => {
  return (
    <div className="dropdowns4">
      <Form.Select className="input-field-formselect3">
      <option value='null'>sort by</option>
        <option value='stock'>stock</option>
        <option value="unitperstock">units per stock</option>
        <option value="price">price</option>
      </Form.Select>
      <Form.Select className="input-feild-formselect3">
      <option value='null'>filter</option>
        <option value="instock">in stock</option>
        <option value="outofstock">out of stock</option>
        <option value="category">category</option>
        <option value="brandname">brand name</option>
      
      </Form.Select>
    </div>
  );
};

export default Filter;
