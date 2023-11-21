import LinkBaseImg25 from "../../assets/img/linkbase/PageImgs/25.png";

const StreamlineSection1 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-6 col-lg-6 ps-xl-5 col-12 order-2 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg25} alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-12 mt-5 mt-lg-0 order-1 order-lg-2">
            <div className="section-title-3">
              <p>
                <span className="text-color">With Linkbase,</span> you have the
                flexibility to tailor your automations according to the booking
                channel and property specifics. You can create custom rules such
                as, 'If' the booking originated from expedia.com, 'then' include
                the guest verification step. ‘If’ the booking originated from
                AirBnB ‘then’ don’t include the guest verification step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamlineSection1;
