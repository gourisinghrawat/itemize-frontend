import "./TextInputs.css";

const TextInputs = ({ inputTextLabel, input_type, input_value, ponChange, pname }) => {
  return (
    <div className="text-inputs">
      <div className="input-text-label6">{inputTextLabel}</div>
      <div className="input-field6">
        <div className="text25">
          <input className="type-here6" placeholder="Type here" name={pname} type={input_type} value={input_value} onChange={ponChange}/>
          
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
