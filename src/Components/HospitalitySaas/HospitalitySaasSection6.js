import saas6 from "../../assets/img/linkbase/PageImgs/saas6.png";

const HospitalitySaasSection6 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Innovative</h6>
              <h5>Create Room Automations</h5>
              <p>Create automations based on conditions to make the guest experience even better for your guests</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasSection6;
