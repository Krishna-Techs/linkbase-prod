import LinkBaseImg6 from "../../assets/img/linkbase/PageImgs/6.png";

const HospitalitySection9 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
        <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-12 text-center col-12">
                  <div className="cta-heading">
                      <h5>Better Stays For Guests</h5>
                      <p>Linkbase SaaS offers an all in one guest experince</p>
                  </div>
              </div>
          </div>
      </div><br></br><br></br>
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h6>Doorlock Control</h6>
              <h5>Accessibility</h5>
              <p>Having smart devices in a room could be complicated for guests, we designed a simple web app for guest to easily navigate through all devices</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={LinkBaseImg6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection9;
