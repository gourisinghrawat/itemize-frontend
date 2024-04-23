import SigninForm from "../components/SigninForm";
import FrameComponent from "../components/FrameComponent";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <main className="navbar-instance">
        <header className="navbar2">
          <div className="background10" />
          <h2 className="logo2">ITEMIZE</h2>
        </header>
        <section className="media4">
          <img
            className="media-background-icon1"
            alt=""
            src="/media-background@2x.png"
          />
          <div className="media-background1" />
          <SigninForm />
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default LoginPage;
