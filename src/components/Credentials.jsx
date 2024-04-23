import "./Credentials.css";

const Credentials = ({ inputTextLabel, typeHerePlaceholder, icon }) => {
  return (
    <div className="credentials5">
      <div className="username5">
        <div className="input-text-label5">{inputTextLabel}</div>
        <div className="input-field5">
          <div className="text18">
            <input
              className="type-here5"
              placeholder={typeHerePlaceholder}
              type="text"
            />
            <img className="icon7" alt="" src={icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
