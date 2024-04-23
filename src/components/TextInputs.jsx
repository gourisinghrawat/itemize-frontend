import "./TextInputs.css";

const TextInputs = ({ inputTextLabel, icon }) => {
  return (
    <div className="text-inputs">
      <div className="input-text-label6">{inputTextLabel}</div>
      <div className="input-field6">
        <div className="text25">
          <input className="type-here6" placeholder="Type here" type="text" />
          <img className="icon8" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
