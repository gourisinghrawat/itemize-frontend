import { useMemo } from "react";
import "./TextInputs3.css";

const TextInputs = ({ inputTextLabel, icon, iconColor, propColor }) => {
  const inputTextLabelStyle = useMemo(() => {
    return {
      color: iconColor,
    };
  }, [iconColor]);

  const typeHereStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="text-inputs4">
      <div className="input-text-label10" style={inputTextLabelStyle}>
        {inputTextLabel}
      </div>
      <div className="input-field12">
        <div className="text53">
          <input
            className="type-here10"
            placeholder="Type here"
            type="text"
            style={typeHereStyle}
          />
          <img className="icon12" alt="" src={icon} />
        </div>
      </div>
    </div>
  );
};

export default TextInputs;
