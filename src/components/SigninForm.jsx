import { useCallback, useState } from "react";
import Credentials from "./Credentials"; // import credentials
import { useNavigate } from "react-router-dom";
import "./SigninForm.css";// remove text inputs yahan pe or jo code mein likhe h

const SigninForm = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const handlelogin=(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const[form, setForm]=useState({});


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


  return (
    <div className="signin-form">
      <div className="mediablr">
        <div className="media-background2" />
        <div className="background30" />
      </div>
      <form className="logo-parent" onSubmit={handleSubmit}>
        <h2 className="logo9">Login</h2>
        
        <div className="input-field-container">
          <div className="text-inputs-parent">
         
          <div className="credentials-group">
          <Credentials
          inputTextLabel="Email"
          typeHerePlaceholder=" Enter your valid Email"
          idval="email_id"
          input_type="email"
          cname="usermail"
          cchange={handlelogin}
          ifreq="true"
        />
            
            <Credentials
          inputTextLabel="Password"
          idval="login_password"
          input_type="password"
          typeHerePlaceholder="Enter your password"
          cname="userpass"
          cchange={handlelogin}
          ifreq="true"
        />
        {/* <Credentials
        
          inputTextLabel="Login"
          idval="login_confirm"
          input_type="submit"
          typeHerePlaceholder="Login"
        /> */}
        <input type="submit" className="button31"/>
        <input type="cancel" placeholder="cancel" className="button31"  onClick={onButton2Click}/>
         {/*<div className="button-frame2">
        <button className="button31inp" onClick={onButtonClick}>
          <div className="link-link1">Submit</div>
        </button>
      </div>
        <div className="button-frame">
        <button className="button31" onClick={onButton2Click}>
          <div className="link-link">cancel</div>
        </button>
      </div>*/}
          </div>
          </div>
          <div className="input-field-container-inner">
            <div className="frame-parent5">
              <div className="logo-wrapper2">
                <h1 className="logo10">ITEMIZE</h1>
              </div>
              <h3 className="text30">
                One Step Solution to Inventory Management and Supply Chain
              </h3>
            </div>
          </div>
        </div>
      </form>
      <div className="text-wrapper">
        <div className="text31" />
      </div>
      
    </div>
  );
};

export default SigninForm;
