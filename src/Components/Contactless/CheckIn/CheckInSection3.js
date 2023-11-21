import LinkBaseImg10 from "../../../assets/img/linkbase/PageImgs/10.png";

const CheckInSection3 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 pe-xl-4 col-12">
            <div className="content-block-img">
              <img src={LinkBaseImg10} alt="" />
            </div>
          </div>
          <div className="col-xl-6 ps-xl-5 col-lg-6 col-12 mt-5 mt-lg-0">
            <div className="section-title-3">
              <h5>Why is Linkbase’s Keyless solution different from others?</h5>
              <p>
                Your keyless solution ties in directly with your guest web app
                making it very convenient and intuitive for guests to access.
              </p>
            </div>
            <div className="checked-features-list style-2">
              <ul>
                <li>
                  Guests unlock and lock the property using a button the app
                </li>
                <li>Guests see the unlock code right on the web app </li>
                <li>Guests also get an SMS with the unlock code.</li>
              </ul>
            </div>
            <div className="section-title-3 mt-3">
              <p>
                You enjoy hassle free Check-ins without ever worrying about
                providing access codes to guests ever again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInSection3;
