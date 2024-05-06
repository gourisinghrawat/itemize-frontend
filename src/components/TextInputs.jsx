import "./TextInputs.css";

const TextInputs = ({ inputTextLabel, input_type, tchange, pname, isreq }) => {
  return (
    <div className="text-inputs">
      <div className="input-text-label6">{inputTextLabel}</div>
      <div className="input-field6">
        <div className="text25">
          <input className="type-here6" placeholder="Type here" name={pname} type={input_type} onChange={tchange} required={isreq}/>
          
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
