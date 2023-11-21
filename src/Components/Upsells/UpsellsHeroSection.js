import { Link } from "react-router-dom";
import upsells from "../../assets/img/linkbase/PageImgs/upsells.png";
import StreamlineBannerBg from "../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const UpsellsHeroSection = () => {
  return (
    <section
      className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h1>Upsells</h1>
              <p>
                Enhance Your Guest Experience and Boost Revenue with direct
                Upsells.
              </p>
              <br />
              <p>
                Did you know on average guests spend 30% of their vacation
                budget on their accommodation and the remaining 70% on other
                things they do during the vacation? You’re already in control of
                the 30% and we help you maximise the most out of the remaining
                70%.
              </p>
            </div>
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 mt-30">
              Book a Demo
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={upsells} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpsellsHeroSection;
