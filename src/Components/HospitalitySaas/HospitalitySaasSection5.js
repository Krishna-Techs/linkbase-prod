import saas5 from "../../assets/img/linkbase/PageImgs/saas5.png";

const HospitalitySaasSection5 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h6>All Inclusive</h6>
              <h5>Easily Create Work Orders</h5>
              <p>You can create work orders for maintenance and device onboarding. Easily manage them from the SaaS and track their status</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={saas5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasSection5;
