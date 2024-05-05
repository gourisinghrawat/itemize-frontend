import Navbar1 from "../components/Navbar1";
import FrameComponent4 from "../components/FrameComponent4";
import "./EditCartPage.css";

const EditCartPage = () => {
  const onLogoTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPersonIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);
  return (
    <div className="edit-cart-page">
      <Navbar1
        onLogoTextClick={onLogoTextClick}
        onPersonIconClick={onPersonIconClick}
      />
      <img className="blurbg-icon11" alt="" src="/blurbg.svg" />
      <FrameComponent4 />
    </div>
  );
};

export default EditCartPage;
