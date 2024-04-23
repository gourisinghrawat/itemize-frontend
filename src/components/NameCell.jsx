import "./NameCell.css";

const NameCell = () => {
  return (
    <div className="name-cell">
      <div className="profile-pic-wrapper">
        <img
          className="profile-pic-icon"
          loading="lazy"
          alt=""
          src="/profile-pic.svg"
        />
      </div>
      <div className="title-group">
        <h1 className="title13">Hi, Aditi</h1>
        <h3 className="title14">Here is your Warehouse Overview</h3>
      </div>
    </div>
  );
};

export default NameCell;
