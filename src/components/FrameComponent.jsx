import { useCallback, useState } from "react";
import TextInputs1 from "./TextInputs1";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const[form, setForm]=useState({});
  
  const handlew=(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
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

  const onButtonContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);
  
  const onButtonContainerClick2 = useCallback(() => {
    navigate("/dashboard-start");
  }, [navigate]);

  return (
    <div className="warehouse-new-frame">
      <form className="warehouse-new2" onSubmit={handleSubmit}>
        <div className="background29" />
        <TextInputs1 
          tname="wcode"
          tchange={handlew}
        />
        <div className="second-button">
          <div className="button-parent1">
            <input type="submit" className="signup-text3" placeholder="join" onClick={onButtonContainerClick}/>
            <div className="join-button">
              <button className="button30" onClick={onButtonContainerClick2}>
                <div className="text28">Cancel</div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent;
