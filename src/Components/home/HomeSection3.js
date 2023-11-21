import LinkBaseImg2 from "../../assets/img/linkbase/PageImgs/2.png";
import { Link } from "react-router-dom";

const HomeSection3 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-2 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg2} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h5>Boost Your Earnings: Upsells</h5>
              <p>
                Our user-friendly software seamlessly links to your bank
                account, enabling you to offer effortless Early Check-ins, Late
                Check-out Upsells, and affiliate-driven revenue streams such as
                local car rentals. Our cutting-edge AI tool boosts your
                profitability by a remarkable 1.5 times.
              </p>
              <Link to='/direct-upsells' className="theme-btn style-3 white mt-3">Direct Upsells</Link><br></br>
              <Link to='/affiliate-upsells' className="theme-btn style-3 white mt-3">Affiliate Upsells</Link><br></br>
              <Link to='/digital-guidebooks' className="theme-btn style-3 white mt-3">Digital Guidebooks</Link><br></br>
              <Link to='/smart-locks' className="theme-btn style-3 white mt-3">Smart Locks</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
