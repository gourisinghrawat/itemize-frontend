import "./TextInputs2.css";

const TextInputs = ({ icon }) => {
  return (
    <div className="text-inputs2">
      <div className="input-text-label8">Input Text Label</div>
      <div className="input-field8">
        <div className="text29">
          <input className="type-here8" placeholder="Type here" type="text" />
          <img className="icon10" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
