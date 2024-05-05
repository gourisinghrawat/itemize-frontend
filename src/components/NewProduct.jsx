import { useCallback } from "react";
import TextInputs from "./TextInputs";
import Dropdowns from "./Dropdowns2";
import { useNavigate } from "react-router-dom";
import "./NewProduct.css";
import React, { useState } from 'react';
//cancel button activated
const NewProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [des, setDes] = useState('');
  const [ups, setUPS] = useState('');
  const [minstock, setMinStock] = useState('');  
  const [supplier, setSupplier] = useState(''); 
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // Validate form data here if needed
    const newProduct = { name, price: parseFloat(price) };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
  };
  const handleform= (e)=>{
    console.log(e.target.value);
    console.log(e.target.name);
  }

  const onButtonClick = useCallback(() => {
    navigate("/inventory-page");
  }, [navigate]);

  return (
    <form className="new-product">
      <h1 className="title16">New  Product</h1>
      <div className="product-form-wrapper">
        <div className="product-form3">
          <input placeholder="type here" name="pname" type="text" onChange={handleform}/>
          <TextInputs
            inputTextLabel="Name"
            input_type="text"
            pname="pname"
            ponChange={handleform}
          />
          <TextInputs
            inputTextLabel="description"
            input_type="text"
            name="pdesp"
          />
          <Dropdowns value={category}/>
          <TextInputs
            inputTextLabel="Brand"
            input_type="text"
            name="pbrand"
          />
          <TextInputs
            inputTextLabel="Unit Per stock"
            input_type="number"
            name="pups"
          />
          <TextInputs
            inputTextLabel="minimum stock"
            input_type="number"
            name="pminstock"
          />
          <TextInputs
            inputTextLabel="Supplier"
            input_type="text"
            name="psupplier"
          />
          <TextInputs
            inputTextLabel="Price"
            input_type="number"
            name="pprice"
            
          />
          
          <input className="button42" type="submit" />
          <button className="button42" onClick={onButtonClick} >
            <div className="content12">Cancel</div>
          </button>
          
        </div>

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
    </form>
  );
};

export default NewProduct;
