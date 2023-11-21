import { Link } from "react-router-dom";
import pricing1 from "../../assets/img/linkbase/PageImgs/pricing1.png";

const PricingSection4 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg11 mb-5">
      <div className="container">
        <div className="row align-items-center section-padding pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5 className="pricingText">Ready to get started?</h5>
              <p className="pricingText">Get a preview of what Linkbase Hospitality can do</p>
            </div>
            <Link to='/' className="theme-btn style-3 homebtn1 mt-30">book a demo</Link>
          </div>
          <div className="col-xl-8 col-lg-8 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={pricing1} className="pricingImg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection4;
