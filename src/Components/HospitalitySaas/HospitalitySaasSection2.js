import saas2 from "../../assets/img/linkbase/PageImgs/saas2.png";

const HospitalitySaasSection2 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-12 text-center col-12">
                  <div className="cta-heading">
                      <h5>The Web Dashboard</h5>
                      <p>For property managers to enhance operations with smart devices</p>
                  </div>
              </div>
          </div>
      </div><br></br><br></br>
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-4 col-lg-4 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h6>Intuitive</h6>
              <h5>Consolidate Room Data</h5>
              <p>View all information on your properties, vacant rooms, occupied rooms, rooms that need maintenance etc. Also get analytics in one complete dashboard</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={saas2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySaasSection2;
