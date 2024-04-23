import Navbar from "../components/Navbar";
import FeatureSplitLeft from "../components/FeatureSplitLeft";
import Trial from "../components/Trial";
import PostBlog from "../components/PostBlog";
import FeatureLeft from "../components/FeatureLeft";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="feature-split-left">
        <section className="content-area">
          <FeatureSplitLeft />
          <Trial />
          <PostBlog />
          <FeatureLeft />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
