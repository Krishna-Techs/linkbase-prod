import LinkBaseImg4 from "../../assets/img/linkbase/PageImgs/4.png";
import { Link } from "react-router-dom";

const HomeSection5 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-2 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg4} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h5>Streamline Operations Through Automation:</h5>
              <p>
                Curate and Tailor each step of the digital guest journey based
                on booking channel as well as based on the property. Use AI
                automations to also automatically push upsells and collect
                revenue.
              </p>
              <Link to='/streamline' className="theme-btn style-3 white mt-3">Tailored automations and workflows</Link><br></br>
              <Link to='/streamline' className="theme-btn style-3 white mt-3">Fully customizable guest journey</Link><br></br>
              <Link to='/streamline' className="theme-btn style-3 white mt-3">Wifi and property information</Link><br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;
