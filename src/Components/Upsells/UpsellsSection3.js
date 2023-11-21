import LinkBaseImg18 from "../../assets/img/linkbase/PageImgs/18.png";

const UpsellsSection3 = () => {
  return (
    <section className="content-block-wrapper section-padding bg-circle fix bg10">
      <div className="container">
        <div className="row align-items-center pb-0">
          <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0 order-2 order-lg-1">
            <div className="section-title-3">
              <h5>Direct Upsells:</h5>
              <p>
                Make more money with Upsells that you can fulfil directly- Like
                Early Check ins and <br />
                Late check outs.
              </p>
              <p>
                <strong>
                  Did you know that 60% of guests request Early Check in or late
                  Check out for their stay?
                </strong>
              </p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 ps-xl-5 col-12 order-1 order-lg-2">
            <div className="content-block-img">
              <img src={LinkBaseImg18} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpsellsSection3;
