import { Link } from "react-router-dom";
import checkOuts from "../../../assets/img/linkbase/PageImgs/checkOuts.png";
import StreamlineBannerBg from "../../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const CheckOutsHeroSection = () => {
  return (
    <section
      className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h1>Contact Less Check-Outs</h1>
              <p>
                Improve Reviews, Increase Direct Bookings, and Save Housekeeping
                Time with Contactless Checkout.
              </p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>
                  Ensure streamlined easy to navigate step by step check-outs.
                </li>
                <li>
                  Make it easier for your housekeeping team when guests know
                  what to do before they check out.{" "}
                </li>
                <li>
                  Better plan cleaning knowing when your guest has checked out.
                </li>
              </ul>
            </div>
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 mt-30">
              Book a Demo
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={checkOuts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOutsHeroSection;
