import LinkBaseImg1 from "../../assets/img/linkbase/PageImgs/1.png";
import { Link } from "react-router-dom";
const HomeSection2 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center col-12">
              <div className="cta-heading">
                <h5 className="mb-0">
                  Get Ready to Scale with{" "}
                  <span className="diff-color">Linkbase!</span>
                </h5>
              </div>
            </div>
          </div>
        </div><br></br><br></br>
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5>Enhance Guest Convenience</h5>
              <p>
                Make it easier for your guests with unmatched convenience.
                Simplify check-ins and checkouts, provide insightful guidebooks
                and convenient Upsells, and offer a seamless smart keyless
                entry. Welcome to a world of effortless hospitality.
              </p>
              <Link to='/Check-in' className="theme-btn style-3 white mt-3">Contactless Check In</Link><br></br>
              <Link to='/check-outs' className="theme-btn style-3 white mt-3">Contactless Check Out</Link><br></br>
              <Link to='/digital-guidebooks' className="theme-btn style-3 white mt-3">Digital Guidebooks</Link><br></br>
              <Link to='/smart-locks' className="theme-btn style-3 white mt-3">Smart Locks</Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
