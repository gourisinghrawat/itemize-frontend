import "./TextInputs11.css";

const TextInputs1 = ({ inputTextLabel, icon }) => {
  return (
    <div className="text-inputs3">
      <div className="input-text-label9">{inputTextLabel}</div>
      <div className="input-field10">
        <div className="text44">
          <input className="type-here9" placeholder="Type here" type="text" />
          <img className="icon11" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TextInputs1;
