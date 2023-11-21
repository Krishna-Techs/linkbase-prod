import { Link } from "react-router-dom";
import checkIn from "../../../assets/img/linkbase/PageImgs/checkIn.png";
import StreamlineBannerBg from "../../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const CheckInHeroSection = () => {
  return (
    <section
      className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h1>Contactless Check-in:</h1>
              <p>
                Deliver precisely what your guests desire: a swift and
                hassle-free contactless check-in experience.
              </p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>
                  Ensure streamlined easy to navigate step by step check-ins
                </li>
                <li>Automated keyless access- With or without Smart Locks</li>
                <li>Boost Operational Efficiency for Your Team</li>
              </ul>
            </div>
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 mt-30">
              Book a Demo
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={checkIn} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInHeroSection;
