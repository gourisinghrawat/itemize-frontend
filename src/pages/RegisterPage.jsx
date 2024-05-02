import RegisterationForm from "../components/RegisterationForm";
import Footer1 from "../components/Footer1";
import "./RegisterPage.css";
//import RegistrationForm from '../components/RegisterationForm'; // Import the RegistrationForm component

const RegisterPage = () => {
  return (
    <div className="register-page">
      <header className="navbar">
        <div className="background" />
        <h2 className="logo">ITEMIZE</h2>
      </header>
      <section className="signin-panel">
        <div className="media">
          <img
            className="media-background-icon"
            alt=""
            src="/media-background@2x.png"
          />
          <div className="media-background" />
          <RegisterationForm />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default RegisterPage;
