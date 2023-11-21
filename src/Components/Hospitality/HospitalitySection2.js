import LinkBaseImg30 from "../../assets/img/linkbase/PageImgs/30.png";

const HospitalitySection2 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Doorlock Control</h6>
              <h5>Enhance Doorlock Logistics</h5>
              <p>With the Linkbase Hospitality SaaS you can easily assign guest to room through a door lock, they have the advantage of a quick process of onboarding and you have peace in mind with security</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg30} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection2;
