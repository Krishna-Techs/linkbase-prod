import saas4 from "../../assets/img/linkbase/PageImgs/saas4.png";

const HospitalitySaasSection4 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Efficient</h6>
              <h5>Quickly Onboard Guests</h5>
              <p>Easily set rooms to guests from the SaaS, your guests will be delighted by the simplicity of the system and you can also rest easy ans let smart devices handle the rest</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasSection4;
