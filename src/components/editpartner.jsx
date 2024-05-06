import { useCallback } from "react";
import TextInputs1 from "./TextInputs1";
import { useState } from "react";
import Dropdowns1 from "./Dropdowns1";
import Credentials from "./Credentials";
import { useNavigate } from "react-router-dom";
import "./AddPartner.css";

const EditPartner = () => {
  const navigate = useNavigate();

  
  const [form, setForm] = useState('');


  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response= await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }
      
    })
    const data= await response.json();
    console.log(data);
  }
  const handlepart=(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
    
  }
  const onButtonClick = useCallback(() => {
    navigate("/partner-page");
  }, [navigate]);

  return (
    <div className="add-partner">
      <div className="background45" />
      <div className="title-container">
        <h1 className="title15">Edit Partner</h1>
        <form className="new-partner" onSubmit={handleSubmit}>
        
          <Credentials inputTextLabel="Name"
          idval="partnerName"
          typeHerePlaceholder="Full name"
          cchange={handlepart}
          input_type="text"/>
          <Dropdowns1 
            dname="partnertype"
            dchange={handlepart}
          />
          <Credentials inputTextLabel="enter your Email"
          idval="partneremail"
          typeHerePlaceholder="email"
          cchange={handlepart}
          cname="partnermail"
          input_type="email"/>
          <Credentials inputTextLabel="contact"
          idval="partnerNo"
          cchange={handlepart}
          cname="partnerno"
          typeHerePlaceholder="phone no."
          input_type="text"/>

          <div className="button-parent2">
          <input type="submit" placeholder="submit" className="button42"onClick={onButtonClick}/>
        <button className="button42" onClick={onButtonClick}>cancel
        </button>
      </div>
        </form>
      </div>
      
    </div>
  );
};

export default EditPartner;
