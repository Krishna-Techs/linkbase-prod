import { Link } from "react-router-dom";
import Streamline from "../../assets/img/linkbase/PageImgs/Streamline.png";
import StreamlineBannerBg from "../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const StreamlineHeroSection = () => {
  return (
    <section
      className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h1>Streamline Operations Through Automation</h1>
              <p><strong>You can now:</strong></p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>Tailor your automations and workflows</li>
                <li>Fully customise your guest journey</li>
                <li>
                  Easily provide key information like Wifi and other necessary
                  information
                </li>
              </ul>
            </div>
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 mt-30">
              Book a Demo
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={Streamline} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamlineHeroSection;
