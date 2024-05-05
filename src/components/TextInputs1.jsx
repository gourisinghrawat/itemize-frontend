import "./TextInputs1.css";

const TextInputs1 = (tchange, tname) => {
  return (
    <div className="text-inputs1">
      <div className="input-text-label7">Enter Warehouse Code</div>
      <div className="input-field7">
        <div className="text27">
          <input className="type-here7" placeholder="Type here" type="text" name={tname} onChange={tchange}/>
        </div>
      </div>
    </div>
  );
};

export default TextInputs1;
