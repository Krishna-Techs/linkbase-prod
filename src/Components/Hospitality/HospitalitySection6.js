import LinkBaseImg33 from "../../assets/img/linkbase/PageImgs/33.png";

const HospitalitySection6 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Secure</h6>
              <h5>Keep Your Property Secure</h5>
              <p>Security is high priority for us, this is why we have included sernsors, smoke alarms, door locks etc. All of these can be controlled from the dashboard</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg33} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection6;
