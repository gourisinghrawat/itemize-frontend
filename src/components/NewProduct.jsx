import { useCallback } from "react";
import TextInputs from "./TextInputs";
import Dropdowns from "./Dropdowns2";
import { useNavigate } from "react-router-dom";
import "./NewProduct.css";
import React, { useState } from 'react';
//cancel button activated
const NewProduct = () => {
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
  const handlepdt=(e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const onButtonClick = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <div className="new-product" >
      <h1 className="title16">New  Product</h1>
      <div className="product-form-wrapper">
        <form className="product-form3" onSubmit={handleSubmit}>
          <TextInputs
            inputTextLabel="Name"
            input_type="text"
            pname="pname"
            tchange={handlepdt}
          />
          <TextInputs
            inputTextLabel="description"
            input_type="text"
            pname="pdesp"
            tchange={handlepdt}
          />
          <Dropdowns
            dchange={handlepdt}
            dname="category"
          />
          <TextInputs
            inputTextLabel="Brand"
            input_type="text"
            pname="pbrand"
            tchange={handlepdt}
          />
          <TextInputs
            inputTextLabel="Unit Per stock"
            input_type="number"
            pname="pups"
            tchange={handlepdt}
          />
          <TextInputs
            inputTextLabel="minimum stock"
            input_type="number"
            pname="pminstock"
            tchange={handlepdt}
          />
          <TextInputs
            inputTextLabel="Supplier"
            input_type="text"
            pname="psupplier"
            tchange={handlepdt}
          />
          <TextInputs
            inputTextLabel="Price"
            input_type="number"
            pname="pprice"
            tchange={handlepdt}
            
          />
          
          <input className="button42" type="submit" />
          <button className="button42" onClick={onButtonClick} >
            <div className="content12">Cancel</div>
          </button>
          
        </form>

      </div>
      {/*<div className="frame-parent12">
        <div className="button-wrapper1">
          <button className="button42" onClick={onButtonClick} >
            <div className="content12">Add</div>
          </button>
        </div>
        <button className="button43" onClick={onButtonClick}>

          <div className="text54">Cancel</div>
        </button>
      </div>*/}
    </div>
  );
};

export default NewProduct;
