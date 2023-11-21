import LinkBaseImg31 from "../../assets/img/linkbase/PageImgs/31.png";

const HospitalitySection4 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Advanced Onboarding</h6>
              <h5>Onboard with a SMS</h5>
              <p>The check-in process with the Linkbase Hospitality SaaS is done through a text message or email. This expedites the process of check-in and guests can directly head to their rental</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg31} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection4;
