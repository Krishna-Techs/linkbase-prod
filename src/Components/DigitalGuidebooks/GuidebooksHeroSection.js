import { Link } from "react-router-dom";
import guideBooks from "../../assets/img/linkbase/PageImgs/guideBooks.png";
import StreamlineBannerBg from "../../assets/img/linkbase/LinkBaseBG/BluebG.png";

const GuidebooksHeroSection = () => {
  return (
    <section
      className="content-block-wrapper section-padding bg-circle fix bg10"
      style={{ backgroundImage: `url(${StreamlineBannerBg})` }}>
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h1>Digital Guidebooks</h1>
              <p>
                Craft Unforgettable Local Experiences for Your Guests with
                Digital Guidebooks.
              </p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>
                  Share vital information about the property like amenities
                </li>
                <li>
                  Enable guests to immerse themselves in the local culture and
                  lifestyle
                </li>
                <li>Minimise guest Questions</li>
              </ul>
            </div>
            <div className="section-title-3 mt-3">
              <h6>Level Up Your Guest Experience with Digital Guidebooks.</h6>
            </div>
            <Link to="https://calendly.com/shiven-7/30min" target="_blank" className="theme-btn style-3 mt-30">
              Book a Demo
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={guideBooks} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidebooksHeroSection;
