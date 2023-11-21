import { Link } from "react-router-dom";
import saas1 from "../../assets/img/linkbase/PageImgs/saas1.png";
import StreamlineBannerBg from "../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const HospitalitySaasHeroSection = () => {
  return (
    <section
      className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h1>Hospitality Software</h1>
              <p>The application designed to relieve major pain points in property management</p>
            </div>
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 mt-30">
              Book a Demo
            </Link>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasHeroSection;
