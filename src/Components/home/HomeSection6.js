import LinkBaseImg5 from "../../assets/img/linkbase/PageImgs/5.png";
import { Link } from "react-router-dom";

const HomeSection6 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5>Increase Repeat Guests and Direct Bookings:</h5>
              <p>
                Tap into the wealth of data collected from the digital guest
                journey. Elevate your brand's presence with our fully
                customisable web app, crafted to reflect your distinct identity.
                Import the data collected into a CRM of your choice to create
                curated marketing campaigns.
              </p>
              <Link to='/increaseRepeatGuests' className="theme-btn style-3 white mt-3">Guest Data collection</Link><br></br>
              <Link to='/increaseRepeatGuests' className="theme-btn style-3 white mt-3">Increased 5 star reviews</Link><br></br>
              <Link to='/integrations' className="theme-btn style-3 white mt-3">CRM integration</Link><br></br>
              <Link to='/increaseRepeatGuests' className="theme-btn style-3 white mt-3">AI messaging</Link><br></br>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection6;
