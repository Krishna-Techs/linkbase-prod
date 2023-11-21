import saas3 from "../../assets/img/linkbase/PageImgs/saas3.png";

const HospitalitySaasSection3 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h6>Organized</h6>
              <h5>Smart Device Database</h5>
              <p>View a database of all devices in your property. You can also view their status, and easily create reports if maintenance is required</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={saas3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasSection3;
