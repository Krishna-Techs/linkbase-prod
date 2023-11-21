import LinkBaseImg3 from "../../assets/img/linkbase/PageImgs/3.png";
import { Link } from "react-router-dom";

const HomeSection4 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5>Combat Frauds: Digital and Instant Guest Screening:</h5>
              <p>
                Take charge with our guest screening and verification tools.
                Seamlessly incorporate third-party security solutions into your
                guest journey for unparalleled protection.
              </p>
              <Link to='/combatFrauds' className="theme-btn style-3 white mt-3">Guest Screening and Verification</Link><br></br>
              <Link to='/combatFrauds' className="theme-btn style-3 white mt-3">Strata documents or rental agreements</Link><br></br>
              <Link to='/combatFrauds' className="theme-btn style-3 white mt-3">Security Deposits and Waivers</Link><br></br>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection4;
