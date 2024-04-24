import "./Credentials.css";

const Credentials = ({ inputTextLabel, typeHerePlaceholder, idval, input_type }) => {
  if(input_type==="submit"){
    return(
      <div className="button31">
              <input
                className="button31inp"
                placeholder={typeHerePlaceholder}
                id={idval}
                type={input_type}
              />
        
      </div>
    );
  }
  else{
    return (
      <div className="credentials5">
        <div className="username5">
          <div className="input-text-label5">{inputTextLabel}</div>
          
              <input
                className="type-here5"
                placeholder={typeHerePlaceholder}
                id={idval}
                type={input_type}
              />
        </div>
      </div>
    );
  }
  
};

export default Credentials;
