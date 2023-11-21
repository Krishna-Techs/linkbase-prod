import LinkBaseImg27 from "../../assets/img/linkbase/PageImgs/27.png";
import LinkBaseImg28 from "../../assets/img/linkbase/PageImgs/28.png";

const RepeatGuestsSection2 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg28} alt="" />
            </div>
            <div className="section-title-3">
              <h5>Guest Data collection:</h5>
              <p>
                Never miss Guest Contact Information or Email again! Guests can
                easily provide key details such as their email address, purpose
                of stay, preferred arrival and departure times, and
                transportation preferences intuitively on the guest web app.
              </p>
              <br />
              <p>
                This enables us to customise exclusive upsell offers for each
                guest, and with their email address and reason for their stay,
                you can reconnect with them for future direct bookings using a
                preferred CRM of your choice.
              </p>
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg27} alt="" />
            </div>
            <div className="section-title-3 repeat1">
              <h5>Better your reviews and ratings:</h5>
              <p>
                Linkbase excels in managing reviews. Guests rating their stay
                below 4 stars share feedback via an in-app text box, while
                higher ratings receive an automatic link to post the review on
                google, enhancing your online reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepeatGuestsSection2;
