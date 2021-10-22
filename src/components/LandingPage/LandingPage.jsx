import Header from "../Header/Header";
import Card from "./Card";
import Footer from "../Footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingMain">
      <Header />
      <main>
        <div className="heading">
          <h1>Network for the Green Era</h1>
          <button className="btn btn-lg btn-warning mt-3 cta">
            <span>StepUp</span>
          </button>
        </div>
        <div className="feature-cards row">
          <Card title="The Network"/>
          {/* <image class="Image_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5TB1Hgre45umVeSDrkGwTvNtKLJ_7VkoRw&usqp=CAU"/> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
