import LinkBaseImg6 from "../../../assets/img/linkbase/PageImgs/6.png";
import LinkBaseImg15 from "../../../assets/img/linkbase/PageImgs/15.png";

const CheckInSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg6} alt="" />
            </div>
            <div className="section-title-3">
              <h5>Step by Step, Picture by Picture</h5>
              <p>
                Help your guests navigate check-in effortlessly with a
                straightforward, image-based guide. Each step includes:
              </p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>An instructional image </li>
                <li>Clear text instructions </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="content-block-img">
              <img src={LinkBaseImg15} alt="" />
            </div>
            <div className="section-title-3 checkIn01">
              <h5>Connect smart locks (optional)</h5>
              <p>
                No More Hidden Keys! Manage Contactless Access with Smart Locks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInSection1;
