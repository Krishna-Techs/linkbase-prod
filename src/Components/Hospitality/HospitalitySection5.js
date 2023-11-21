import LinkBaseImg32 from "../../assets/img/linkbase/PageImgs/32.png";

const HospitalitySection5 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <h6>Novel Experience</h6>
              <h5>Impress Guests with Smart Devices</h5>
              <p>You can impress you guests with smart devices set up on your property. Anything from smart lights to smart curtain ans aroma diffusers can make the expereince that mush better</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-2 order-lg-1">
            <div className="content-block-img">
              <img src={LinkBaseImg32} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalitySection5;
