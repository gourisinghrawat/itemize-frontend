import { useMemo } from "react";
import "./TextInputs4.css";

const TextInputs = ({
  inputTextLabel,
  icon,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const textInputsStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div className="text-inputs6" style={textInputsStyle}>
      <div className="input-text-label12">{inputTextLabel}</div>
      <div className="input-field15">
        <div className="text64">
          <input className="type-here12" placeholder="Type here" type="text" />
          <img className="icon14" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
