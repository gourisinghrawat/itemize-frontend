import { useCallback, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Credentials from "./Credentials";
import { useNavigate } from "react-router-dom";
import "./RegisterationForm.css";

const RegisterationForm = () => {
  const navigate = useNavigate();
  
  const[form, setForm]=useState({});
  
  const handlereg=(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(form);
    
    const response= await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
      
    })
    const data= await response.json();
    console.log(data);
    
    navigate("/dashboard-start");
  }

  const onButtonClick = useCallback(() => {

    navigate("/dashboard-start");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="registeration-form">
      <div className="background25" />
      <div className="logo-frame">
        <h2 className="logo6">REGISTER</h2>
      </div>
      <form className="credentials-group" onSubmit={handleSubmit}>
        <Credentials
          inputTextLabel="Name"
          typeHerePlaceholder="Name"
          type="text"
          cname="uname"
          cchange={handlereg}
          ifreq="true"
        />
        <Credentials
          inputTextLabel="Email"
          typeHerePlaceholder="Email"
          type="email"
          cname="usermail"
          cchange={handlereg}
          ifreq="true"
        />
        <Credentials
          inputTextLabel="Phone Number"
          typeHerePlaceholder="Phone Number"
          input_type="text"
          cname="phoneno"
          cchange={handlereg}
          ifreq="true"
        />
        <div className="dropdowns">
          <div className="dropdown-title" >Company Role</div>
          <Form.Select className="input-field-formselect" name="role" onChange={handlereg} required="true">
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
          inputTextLabel="Password"
          typeHerePlaceholder="Enter a valid password"
          input_type="password"
          cname="pass"
          cchange={handlereg}
          ifreq="true"
        />
        <Credentials
          inputTextLabel="Confirm Password"
          typeHerePlaceholder="Enter your password"
          input_type="password"
          cchange={handlereg}
          cname="passconfirm"
          ifreq="true"
        />
        <input type="submit" placeholder="submit" className="buttonsubmit" />
        
        <button className="buttonsubmit" onClick={onButton2Click}>
          cancel
        </button>
        
        
      
      </form>
    </div>
  );
};

export default RegisterationForm;
