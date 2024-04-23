import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Dropdowns2.css";

const Dropdowns = ({ propColor, propColor1 }) => {
  const dropdownTitleStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="dropdowns6">
      <div className="dropdown-title4" style={dropdownTitleStyle}>
        Category
      </div>
      <Form.Select className="input-field-formselect4">
        <option>Category</option>
        <option value="'Electronics'">'Electronics'</option>
        <option value="'Clothing'">'Clothing'</option>
        <option value="'Hardware'">'Hardware'</option>
        <option value="'Food'">'Food'</option>
        <option value="'Stationery'">'Stationery'</option>
        <option value="'Healthcare'">'Healthcare'</option>
        <option value="'Cosmetics'">'Cosmetics'</option>
        <option value="'Furniture'">'Furniture'</option>
        <option value="'Crockery'">'Crockery'</option>
        <option value="'Home Furnishing'">'Home Furnishing'</option>
      </Form.Select>
    </div>
  );
};

export default Dropdowns;
